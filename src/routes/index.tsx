import React from 'react';
import { Switch, Route } from 'react-router-dom';

import listOfOrders from '../pages/listOfOrders';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={listOfOrders} />
  </Switch>
);

export default Routes;