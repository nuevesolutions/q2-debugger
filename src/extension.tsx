import React from 'react';
import Wolfsbane from 'wolfsbane';
import { render } from 'react-dom';
import App from './App';

const wolfsbane = new Wolfsbane(chrome.devtools.inspectedWindow.tabId);
const { logger } = wolfsbane;

logger.info('hello', 'q2');

render(<App />, document.getElementById('app'));
