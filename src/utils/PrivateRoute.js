import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Sidebar, Navbar } from 'layouts';

const PrivateRoute = ({ component: Component, isAuthenticated, progress, ...rest }) => {
  const appLayout = props => (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar title={ rest.title } />
        <Component {...props} />

        <footer className="text-center text-sm py-4 border-t mt-20">
          @ 2020 SHIPME All Right Reserved
        </footer>
      </div>
    </div>
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
  ...state.user
});

export default connect(mapStateToProps)(PrivateRoute);
