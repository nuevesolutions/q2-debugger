/**
 * Copyright 2020 Nueve Solutions LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { FC } from 'react';
import LoggerContext from './contexts/Logger';
import Messenger from './messenger';
import Routes from './routes';

export interface AppProps {
  logger: Messenger['logger'];
}

const App: FC<AppProps> = (props: AppProps) => {
  return (
    <LoggerContext.Provider value={props.logger}>
      <Routes />
    </LoggerContext.Provider>
  );
};

export default App;
