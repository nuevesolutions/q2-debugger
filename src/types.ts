export type ExtensionPanel = chrome.devtools.panels.ExtensionPanel;

export interface RequestRow {
  requestData: string;
  responseData: string;
  routingKey: string;
  status: number;
  url: string;
}
