import React from 'react';
import Wolfsbane from 'wolfsbane';
import { render } from 'react-dom';
import App from './App';

const wolfsbane = new Wolfsbane(chrome.devtools.inspectedWindow.tabId);
const { logger } = wolfsbane;

try {
  render(<App logger={logger} />, document.getElementById('app'));
} catch (err) {
  logger.warn(err);
}
