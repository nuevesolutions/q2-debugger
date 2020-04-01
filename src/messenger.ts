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
