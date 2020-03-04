import React, { FC } from 'react';
import Routes from './routes';

export interface AppProps {
  logger: any;
}

const App: FC<AppProps> = (_props: AppProps) => {
  return <Routes />;
};

export default App;
