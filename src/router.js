import React, { Fragment } from 'react';
// import PrivateRoute from 'utils/privateRoute';
import { Route, Switch, withRouter } from 'react-router-dom';

// import { Navbar } from 'lib/components';
import Login from 'pages/Login';

const RouterManager = withRouter(({ location }) => (
  <Fragment>
    {/* { location.pathname !== '/login' && <Navbar /> } */}
    <Route exact path='/' component={Login} />

    <Switch>
      {/* <PrivateRoute exact path='/' component={Login} /> */}
      {/* <PrivateRoute path='/ar' component={ARPage} />
      <PrivateRoute path='/ar-create' component={ARCreate} />
      <PrivateRoute path='/ar-update' component={ARUpdate} />
      <PrivateRoute path='/my-project' component={MyProject} />
      <PrivateRoute path='/search/:term' component={SearchResult} /> */}
    </Switch>
  </Fragment>
));

export default RouterManager;
