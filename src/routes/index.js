import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login, SignUp, NotFound } from '../components';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='*' component={NotFound} />
    </Switch>
  );
}
