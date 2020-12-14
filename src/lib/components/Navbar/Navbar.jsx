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

const Navbar = (props) => {

  return (
    <div className="shadow bg-whitel h-12 flex items-center justify-between">
      <button className="px-5">
        <Icon icon="menu" color="#000" />
      </button>

      <h1 className="w-full text-center">DASHBOARD</h1>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Navbar);
