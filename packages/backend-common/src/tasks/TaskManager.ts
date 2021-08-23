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

import { Config } from '@backstage/config';
import { Knex } from 'knex';
import { Duration } from 'luxon';
import { v4 as uuid } from 'uuid';
import { DatabaseManager } from '../database';
import { DbTaskLocksRow } from '../database/tables';
import { PluginTaskManager } from './types';

export class PluginTaskManagerImpl implements PluginTaskManager {
  constructor(
    private readonly pluginId: string,
    private readonly databaseFactory: () => Promise<Knex>,
  ) {}

  async acquireLock(
    idWithoutPrefix: string,
    options: {
      timeout: Duration;
    },
  ): Promise<
    | { acquired: false }
    | { acquired: true; release: () => void | Promise<void> }
  > {
    const knex = await this.databaseFactory();
    const id = `plugin:${this.pluginId}:${idWithoutPrefix}`;
    const ticket = uuid();
    const timeout = options.timeout.as('seconds');

    const release = async () => {
      try {
        await knex<DbTaskLocksRow>('task_locks')
          .where('id', '=', id)
          .where('acquired_ticket', '=', ticket)
          .delete();
      } catch {
        // fail silently
      }
    };

    // First try to overwrite an existing lock, that has timed out
    const stolen = await knex<DbTaskLocksRow>('task_locks')
      .where('id', '=', id)
      .whereNotNull('acquired_ticket')
      .where('expires_at', '<', knex.fn.now())
      .update({
        acquired_ticket: ticket,
        acquired_at: knex.fn.now(),
        expires_at:
          knex.client.config.client === 'sqlite3'
            ? knex.raw(`datetime('now', ?)`, [`${timeout} seconds`])
            : knex.raw(`now() + interval '${timeout} seconds'`),
      });

    if (stolen) {
      return { acquired: true, release };
    }

    try {
      await knex<DbTaskLocksRow>('task_locks').insert({
        id,
        acquired_ticket: ticket,
        acquired_at: knex.fn.now(),
        expires_at:
          knex.client.config.client === 'sqlite3'
            ? knex.raw(`datetime('now', ?)`, [`${timeout} seconds`])
            : knex.raw(`now() + interval '${timeout} seconds'`),
      });
      return { acquired: true, release };
    } catch {
      return { acquired: false };
    }
  }
}

/**
 * Deals with management and locking related to distributed tasks.
 *
 * @public
 */
export class TaskManager {
  static fromConfig(
    config: Config,
    options?: { databaseManager?: DatabaseManager },
  ): TaskManager {
    const databaseManager =
      options?.databaseManager ?? DatabaseManager.fromConfig(config);
    return new TaskManager(databaseManager);
  }

  constructor(private readonly databaseManager: DatabaseManager) {}

  forPlugin(pluginId: string): PluginTaskManager {
    // We leverage this mechanism just because it lets us defer the async
    // action of connecting to the database out of the construction flow,
    // so that these functions can be synchronous for the consumer
    let knex: Knex | undefined;
    const databaseFactory = async () => {
      if (!knex) {
        knex = await this.databaseManager
          .forPlugin('backstage-backend-common')
          .getClient();
      }
      return knex;
    };

    return new PluginTaskManagerImpl(pluginId, databaseFactory);
  }
}
