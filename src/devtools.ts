import { ExtensionPanel } from './types';

chrome.devtools.panels.create(
  'Q2',
  '',
  'panel.html',
  (_panel: ExtensionPanel) => {}
);
