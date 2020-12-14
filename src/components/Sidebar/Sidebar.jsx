import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Icon from 'icon';

const menuList = [
  {
    label: 'Dashboard',
    link: '/',
    icon: 'grid-view'
  }, {
    label: 'Pengiriman',
    link: '/pengiriman',
    icon: 'edit'
  }
]

const Sidebar = (props) => {

  return (
    <div className="flex-1 flex flex-col bg-darkDrop" style={{ maxWidth: '15rem' }}>
      <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">

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

          <button className="flex items-center px-2 py-2 text-base leading-6 font-medium text-white">
            <Icon icon="logout" size={ 25 } />
            <p className="ml-3">Keluar</p>
          </button>
        </nav>
      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Sidebar);
