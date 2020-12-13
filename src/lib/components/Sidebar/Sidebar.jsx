import React, { useState } from 'react';
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
    link: '/',
    icon: 'edit'
  }
]

const Sidebar = (props) => {

  return (
    <div className="fixed inset-0 flex z-40">
      <div className="relative flex-1 flex flex-col max-w-xs bg-darkDrop">
        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">

          <div className="flex-shrink-0 flex items-center px-4">
            <img className="w-auto" src="/images/logo.jpg" alt="logo" />
          </div>

          <nav className="mt-5 px-2">
            { menuList.map(item => (
              <Link to={ item.link } className="flex items-center px-2 py-2 text-base leading-6 font-medium text-white">
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

      <div className="flex flex-1">

      </div>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Sidebar);
