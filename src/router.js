import React, { Fragment } from 'react';
import PrivateRoute from 'utils/PrivateRoute';
import { Route, Switch, withRouter } from 'react-router-dom';

import { Sidebar, Navbar } from 'components';
import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';
import CreateShipment from 'pages/CreateShipment';

const RouterManager = withRouter(({ location, ...props }) => (
  <Fragment>
    <Route exact path='/login' component={ Login } />

    <div className="flex">
      { location.pathname !== '/login' && <Sidebar {...props}  /> }

      <div className="flex flex-1 flex-col">
        { location.pathname !== '/login' && <Navbar /> }

        <Switch>
          <PrivateRoute exact path='/' component={ Dashboard } />
          <PrivateRoute path='/shipment' component={ CreateShipment } />
        </Switch>

        <footer className="text-center text-sm py-4 border-t">
          @ 2020 SHIPME All Right Reserved
        </footer>
      </div>
    </div>
  </Fragment>
));

export default RouterManager;
