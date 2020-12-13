import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Loading } from 'lib/elements';

const PrivateRoute = ({ component: Component, isAuthenticated, progress, ...rest }) => {
  const appLayout = props => (
    <Fragment>
      <Component {...props} />
      {/* <Loading shown={progress} /> */}
    </Fragment>
  );

  return (
    <Route
      {...rest}
      render={props => (
        isAuthenticated ? appLayout(props) : <Redirect to='/login' />
      )}
    />
  );
};

const mapStateToProps = state => ({
  ...state.user,
  // progress: state.loading.isLoading
});

export default connect(mapStateToProps)(PrivateRoute);
