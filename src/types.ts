export type ExtensionPanel = chrome.devtools.panels.ExtensionPanel;

export type DevtoolsNetworkRequest = chrome.devtools.network.Request;

export interface RequestRow {
  requestData: string;
  responseData: string;
  routingKey: string;
  status: number;
  url: string;
}

export interface Ports {
  [key: string]: Port;
}

export interface Message {
  action: string;
  args?: any[];
  tabId?: number;
  [key: string]: any;
}

export type Port = chrome.runtime.Port;

export type Action = (...args: any[]) => any;

export interface Actions {
  [key: string]: Action;
}
