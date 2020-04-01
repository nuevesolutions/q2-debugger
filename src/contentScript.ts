import Messenger from './messenger';
import { Actions, Message } from './types';

export const actions: Actions = {
  log(level: string, ...args: any[]) {
    return ((console as unknown) as Actions)[level || 'log'](...args);
  }
};

export function registerContentScript() {
  const messenger = new Messenger();
  messenger.backgroundPort.onMessage.addListener((message: Message) => {
    const action = actions[message.action];
    if (message.action === 'log') {
      return action(message.level || 'log', ...(message.args || []));
    }
    if (action) return action(...(message.args || []));
    return;
  });
}

registerContentScript();
