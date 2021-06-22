import React from 'react';
import { Switch, Route } from 'react-router-dom';

import listOfOrders from '../pages/listOfOrders';
import feedBackChat from '../pages/feedBackChat';
import createOrder from '../pages/createOrder';
import assignOrder from '../pages/assignOrder'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={listOfOrders} />
    <Route path="/feedback" component={feedBackChat} />
    <Route path="/create-order" component={createOrder} />
    <Route path="/assign-order" component={assignOrder} />
  </Switch>
);

export default Routes;