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

import { Duration } from 'luxon';
import { AbortController } from 'node-abort-controller';
import { Logger } from 'winston';
import {
  compose,
  withLimiter,
  withRecurring,
  withWaitAfter,
  withWaitBefore,
} from './primitives';
import { Task } from './types';
import { validateTaskId } from './util';

class TheEntityProvider {
  get task(): Task {
    return async ctx => {};
  }
}

type RunOptions = {
  taskId: string;
  delayedStart?: Duration;
  waitBetweenEach?: Duration;
  atMostEvery?: Duration;
};

class TaskScheduler {
  private readonly shutdownCallbacks: Array<() => void>;
  private readonly logger: Logger;

  constructor(options: { logger: Logger }) {
    this.shutdownCallbacks = [];
    this.logger = options.logger;
  }

  async run(task: Task, options: RunOptions): Promise<void> {
    const { taskId, delayedStart, waitBetweenEach, atMostEvery } = options;

    validateTaskId(taskId);

    const abortController = new AbortController();
    this.shutdownCallbacks.push(() => abortController.abort());

    const composed = compose(
      task,
      delayedStart && withWaitBefore(() => delayedStart),
      withRecurring(),
      atMostEvery && withLimiter(() => atMostEvery),
      waitBetweenEach && withWaitAfter(() => waitBetweenEach),
    );

    composed({
      taskId: options.taskId,
      signal: abortController.signal,
      logger: this.logger.child({ task: options.taskId }),
    });
  }

  async destroy() {
    for (const cancel of this.shutdownCallbacks) {
      cancel();
    }
  }
}

function backend({ scheduler }: { scheduler: TaskScheduler }) {
  const provider = new TheEntityProvider();

  scheduler.run(provider.task, {
    taskId: '',
    atMostEvery: Duration.fromObject({ minutes: 2 }),
  });
}
