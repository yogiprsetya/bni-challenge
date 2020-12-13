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
      {/* <PrivateRoute path='/ar' component={ARPage} />
      <PrivateRoute path='/ar-create' component={ARCreate} />
      <PrivateRoute path='/ar-update' component={ARUpdate} />
      <PrivateRoute path='/my-project' component={MyProject} />
      <PrivateRoute path='/search/:term' component={SearchResult} /> */}
    </Switch>
  </Fragment>
));

export default RouterManager;
