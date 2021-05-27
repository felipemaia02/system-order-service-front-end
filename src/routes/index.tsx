import React from 'react';
import { Switch, Route } from 'react-router-dom';

import teste from '../pages/teste';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={teste} />
  </Switch>
);

export default Routes;