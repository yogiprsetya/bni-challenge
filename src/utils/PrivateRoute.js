import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Sidebar, Navbar, Loading } from 'layouts';

const PrivateRoute = ({ component: Component, isAuthenticated, showSidebar, startLoading, ...rest }) => {
  const appLayout = props => (
    <Fragment>
      <div className="flex">
        <Sidebar />

        <div className={ `flex flex-col ${showSidebar ? 'md:w-10/12 w-full' : 'w-full'}` }>
          <Navbar title={ rest.title } />
          <Component {...props} />

          <footer className="text-center text-sm py-4 border-t mt-20">
            @ 2020 SHIPME All Right Reserved
          </footer>
        </div>
      </div>

      { startLoading && <Loading /> }
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
  ...state.appsControl,
});

export default connect(mapStateToProps)(PrivateRoute);
