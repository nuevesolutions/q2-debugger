export type ExtensionPanel = chrome.devtools.panels.ExtensionPanel;

export type DevtoolsNetworkRequest = chrome.devtools.network.Request;

export interface RequestRow {
  requestData: string;
  responseData: string;
  routingKey: string;
  status: number;
  url: string;
}
