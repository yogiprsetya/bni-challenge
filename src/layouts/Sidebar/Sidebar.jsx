import React from 'react';
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
    <div
      className={ `w-6/12 md:w-2/12 min-h-screen relative z-20 ${showSidebar ? 'hidden md:flex' : 'flex md:hidden'}` }
    >
      <div className="h-full w-full pt-5 pb-4 relative bg-darkDrop" style={{ maxWidth: 'inherit' }}>

        <div className="flex justify-center mt-12">
          <img className="max-w-full" src="/images/logo.jpg" alt="logo" />
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
    </div>
  );
}

const mapStateToProps = state => ({
  ...state.appsControl
});

export default connect(mapStateToProps)(Sidebar);
