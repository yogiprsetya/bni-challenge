import React, { Fragment } from 'react';
import PrivateRoute from 'utils/PrivateRoute';
import { Route, Switch } from 'react-router-dom';

import Login from 'pages/Login';
import Dashboard from 'pages/Dashboard';
import CreateShipment from 'pages/CreateShipment';

const RouterManager = () => (
  <Fragment>
    <Route exact path='/login' component={ Login } />

    <Switch>
      <PrivateRoute exact path='/' component={ Dashboard } title="Dashboard" />
      <PrivateRoute path='/shipment' component={ CreateShipment } title="Pengiriman" />
    </Switch>
  </Fragment>
);

export default RouterManager;
