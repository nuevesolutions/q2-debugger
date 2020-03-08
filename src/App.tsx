import React, { FC } from 'react';
import LoggerContext from './contexts/Logger';
import Routes from './routes';

export interface AppProps {
  logger: any;
}

const App: FC<AppProps> = (props: AppProps) => {
  return (
    <LoggerContext.Provider value={props.logger}>
      <Routes />
    </LoggerContext.Provider>
  );
};

export default App;
