/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { DateTime, Duration } from 'luxon';
import { AbortController } from 'node-abort-controller';
import { Task, TaskContext, TaskDecorator, TaskLock, TaskTimer } from './types';
import { sleep } from './util';

export function compose(
  task: Task,
  ...decorators: Array<TaskDecorator | false | null | 0 | undefined>
) {
  let result = task;

  for (const decorator of decorators.reverse()) {
    if (decorator) {
      result = decorator(task);
    }
  }

  return result;
}

export function withRecurring(): TaskDecorator {
  return fn => {
    return async function repeatedly(ctx: TaskContext) {
      while (!ctx.signal.aborted) {
        await fn(ctx);
      }
    };
  };
}

export function withWaitBefore(t: TaskTimer): TaskDecorator {
  return fn => {
    return async function waitThenCall(ctx: TaskContext) {
      const delay = t();
      await sleep(delay, ctx);
      await fn(ctx);
    };
  };
}

export function withWaitAfter(t: TaskTimer): TaskDecorator {
  return fn => {
    return async function callThenWait(ctx: TaskContext) {
      const delay = t();
      await fn(ctx);
      await sleep(delay, ctx);
    };
  };
}

export function withLimiter(t: TaskTimer): TaskDecorator {
  return fn => {
    let nextCallEarliestAt: DateTime | undefined = undefined;
    return async function timeLimitedCall(ctx: TaskContext) {
      if (!nextCallEarliestAt) {
        nextCallEarliestAt = DateTime.utc().plus(t());
        await fn(ctx);
      } else {
        const delta = nextCallEarliestAt.diffNow();
        nextCallEarliestAt = DateTime.utc().plus(t());
        if (delta.as('milliseconds') > 0) {
          await sleep(delta, ctx);
        }
        if (!ctx.signal.aborted) {
          await fn(ctx);
        }
      }
    };
  };
}

function dependentSignal(signal: AbortSignal) {
  const mixedController = new AbortController();

  signal.addEventListener('abort', abort);

  function abort() {
    signal.removeEventListener('abort', abort);
    mixedController.abort();
  }

  function destroy() {
    signal.removeEventListener('abort', abort);
  }

  return { signal: mixedController.signal, abort, destroy };
}

export function withTimeout(t: TaskTimer): TaskDecorator {
  return fn => {
    return async function callWithTimeout(ctx: TaskContext) {
      const { signal, abort, destroy } = dependentSignal(ctx.signal);

      const duration = t();
      const timeoutHandle = setTimeout(function timeout() {
        ctx.logger.warn(
          `Task ${
            ctx.taskId
          } timed out after ${duration.toMillis()} ms, attempting abort`,
        );
        abort();
      }, duration.toMillis());

      try {
        await fn({ ...ctx, signal });
      } finally {
        clearTimeout(timeoutHandle);
        destroy();
      }
    };
  };
}

export function withMetrics(
  callback: (metrics: {
    success: boolean;
    error?: unknown;
    duration: Duration;
  }) => void | Promise<void>,
): TaskDecorator {
  return fn => {
    return async function callWithMetrics(ctx: TaskContext) {
      const startedAt = DateTime.utc();

      async function markSuccess() {
        if (!ctx.signal.aborted) {
          try {
            await callback({
              success: true,
              duration: startedAt.diffNow(),
            });
          } catch {
            // ignore
          }
        }
      }

      async function markFailure(error: unknown) {
        if (!ctx.signal.aborted) {
          try {
            await callback({
              success: false,
              error,
              duration: startedAt.diffNow(),
            });
          } catch {
            // ignore
          }
        }
      }

      try {
        await fn(ctx);
        await markSuccess();
      } catch (e) {
        await markFailure(e);
      }
    };
  };
}

export function withLock(lock: TaskLock): TaskDecorator {
  return fn => {
    return async function callIfLockAcquired(ctx: TaskContext) {
      // Attempt to grab the lock first
      let release: () => void | Promise<void>;
      try {
        const x = await lock.acquire();
        if (!x.acquired) {
          return;
        }
        release = x.release;
      } catch (e) {
        ctx.logger.error(`Task ${ctx.taskId} failed to acquire lock`, e);
        return;
      }

      try {
        await fn(ctx);
      } finally {
        release();
      }
    };
  };
}
