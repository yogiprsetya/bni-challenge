import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Loading } from 'lib/elements';

const PrivateRoute = ({ component: Component, auth, progress, ...rest }) => {
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
        auth.isAuthenticated ? appLayout(props) : <Redirect to='/login' />
      )}
    />
  );
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
  // progress: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  // progress: state.loading.isLoading
});

export default connect(mapStateToProps)(PrivateRoute);
