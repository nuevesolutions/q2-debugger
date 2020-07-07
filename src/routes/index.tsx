import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import AddApi from './AddApi';

export interface RoutesProps {}

const Routes: FC<RoutesProps> = (_props: RoutesProps) => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/add-api">
      <AddApi />
    </Route>
  </Switch>
);

export default Routes;
