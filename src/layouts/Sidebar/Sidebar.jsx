import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from 'store/actions/logginUser';
import Icon from 'icon';

const menuList = [
  {
    label: 'Dashboard',
    link: '/',
    icon: 'grid-view'
  }, {
    label: 'Pengiriman',
    link: '/shipment',
    icon: 'edit'
  }
]

const Sidebar = ({ dispatch, showSidebar }) => {

  return (
    <Fragment>
      { showSidebar && <div className="flex-1 flex flex-col bg-darkDrop min-h-screen" style={{ maxWidth: '15rem' }}>
        <div className="flex-1 h-full pt-5 pb-4 fixed">

          <div className="flex justify-center">
            <img className="w-auto" src="/images/logo.jpg" alt="logo" />
          </div>

          <nav className="mt-10 px-2">
            { menuList.map(item => (
              <Link to={ item.link } key={ item.link } className="flex items-center px-2 py-2 mb-2 font-medium text-white">
                <Icon icon={ item.icon } size={ 25 } />
                <p className="ml-3">{ item.label }</p>
              </Link>
            )) }

            <button
              onClick={ () => dispatch(logoutUser()) }
              className="flex items-center px-2 py-2 text-base leading-6 font-medium text-white"
            >
              <Icon icon="logout" size={ 25 } />
              <p className="ml-3">Keluar</p>
            </button>
          </nav>
        </div>
      </div> }
    </Fragment>
  );
}

const mapStateToProps = state => ({
  ...state.appsControl
});

export default connect(mapStateToProps)(Sidebar);
