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

import { InputError } from '@backstage/errors';
import { Duration } from 'luxon';
import { TaskContext } from './types';

// Keep the IDs compatible with e.g. Prometheus
export function validateTaskId(taskId: string) {
  if (
    typeof taskId !== 'string' ||
    !/^[a-z0-9]+(?:_[a-z0-9]+)*$/.test(taskId)
  ) {
    throw new InputError(
      `${taskId} is not a valid task ID, expected string of lowercase characters and digits separated by underscores`,
    );
  }
}

export async function sleep(duration: Duration, ctx: TaskContext) {
  if (!ctx.signal.aborted) {
    await new Promise<void>(resolve => {
      ctx.signal.addEventListener('abort', done);
      const timeoutHandle = setTimeout(done, duration.toMillis());
      function done() {
        ctx.signal.removeEventListener('abort', done);
        clearTimeout(timeoutHandle);
        resolve();
      }
    });
  }
}
