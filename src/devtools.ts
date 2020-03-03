import { ExtensionPanel } from './types';

chrome.devtools.panels.create(
  'Q2',
  '',
  'extension.html',
  (_panel: ExtensionPanel) => {}
);
