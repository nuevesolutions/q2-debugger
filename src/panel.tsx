import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Messenger from './messenger';

const messenger = new Messenger(chrome.devtools.inspectedWindow.tabId);

const { logger } = messenger;

try {
  render(<App logger={logger} />, document.getElementById('app'));
} catch (err) {
  logger.warn(err);
}
