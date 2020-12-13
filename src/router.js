import React, { Fragment } from 'react';
import PrivateRoute from 'utils/PrivateRoute';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Sidebar } from 'lib/components';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';

const RouterManager = withRouter(({ location }) => (
  <Fragment>
    { location.pathname !== '/login' && <Sidebar /> }
    <Route exact path='/login' component={ Login } />

    <Switch>
      <PrivateRoute exact path='/' component={ Dashboard } />
    </Switch>
  </Fragment>
));

export default RouterManager;
