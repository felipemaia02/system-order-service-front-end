import React from 'react';
import { Switch, Route } from 'react-router-dom';

import listOfOrders from '../pages/listOfOrders';
import feedBackChat from '../pages/feedBackChat';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={listOfOrders} />
    <Route path="/feedback" exact component={feedBackChat} />
  </Switch>
);

export default Routes;