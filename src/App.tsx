import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoggerContext from './contexts/Logger';
import Messenger from './messenger';
import Routes from './routes';

export interface AppProps {
  logger: Messenger['logger'];
}

const App: FC<AppProps> = (props: AppProps) => {
  return (
    <LoggerContext.Provider value={props.logger}>
      <Router>
        <Routes />
      </Router>
    </LoggerContext.Provider>
  );
};

export default App;
