import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { MessengerMock } from './messenger';

const messenger = new MessengerMock();

const { logger } = messenger;

try {
  render(<App logger={logger} />, document.getElementById('app'));
} catch (err) {
  logger.warn(err);
}
