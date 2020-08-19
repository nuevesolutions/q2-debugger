/**
 * Copyright 2020 Nueve Solutions LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Message } from './types';

export default class Messenger {
  backgroundPort = chrome.runtime.connect({ name: 'content' });

  constructor(public tabId?: number) {
    this.backgroundPort.postMessage({ action: 'registerTab' });
  }

  postMessage(message: Message) {
    return this.backgroundPort.postMessage({
      ...message,
      ...(this.tabId ? { tabId: this.tabId } : {})
    });
  }

  logger = {
    log: (...args: any[]) =>
      this.postMessage({ action: 'log', level: 'log', args }),
    info: (...args: any[]) =>
      this.postMessage({ action: 'log', level: 'info', args }),
    warn: (...args: any[]) =>
      this.postMessage({ action: 'log', level: 'warn', args }),
    debug: (...args: any[]) =>
      this.postMessage({ action: 'log', level: 'debug', args })
  };
}

export class MessengerMock {
  logger = console;

  postMessage(message: Message) {
    return message;
  }
}
