import React from 'react';
import PrivateRoute from 'utils/PrivateRoute';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Sidebar, Navbar } from 'components';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';

const RouterManager = withRouter(({ location, ...props }) => (
  <div className="inset-0 flex z-40">
    { location.pathname !== '/login' && <Sidebar {...props}  /> }
    <Route exact path='/login' component={ Login } />

    <div className="flex flex-1 w-ful flex-col">
      { location.pathname !== '/login' && <Navbar /> }

      <Switch>
        <PrivateRoute exact path='/' component={ Dashboard } />
      </Switch>
    </div>
  </div>
));

export default RouterManager;
