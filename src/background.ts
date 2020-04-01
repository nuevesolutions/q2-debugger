import { Message, Port, Ports } from './types';

const tabPorts: Ports = {};

export function registerBackground() {
  chrome.runtime.onConnect.addListener((backgroundPort: Port) => {
    function handleMessage(message: Message, clientPort: Port) {
      if (message.action === 'registerTab') {
        if (
          clientPort.sender?.tab?.id &&
          !(clientPort.sender.tab.id.toString() in tabPorts)
        ) {
          tabPorts[clientPort.sender.tab.id.toString()] = clientPort;
        }
        return;
      }
      if (typeof message.action === 'undefined') return;
      const tabId = message.tabId || clientPort.sender?.tab?.id;
      if (typeof message.tabId === 'undefined') return;
      return tabPorts[tabId?.toString() || '']?.postMessage(message);
    }
    backgroundPort.onMessage.addListener(handleMessage);
    backgroundPort.onDisconnect.addListener((port: Port) => {
      port.onMessage.removeListener(handleMessage);
      Object.keys(tabPorts).forEach((tabIdString: string) => {
        if (tabPorts[tabIdString] == port) delete tabPorts[tabIdString];
      });
    });
  });
}

registerBackground();
