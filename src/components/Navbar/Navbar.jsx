import React from 'react';
import { connect } from 'react-redux';
import Icon from 'icon';

const Navbar = (props) => {

  return (
    <div className="shadow bg-white py-4 flex items-center justify-between">
      <button className="px-5">
        <Icon icon="menu" color="#000" />
      </button>

      <h1 className="w-full text-center">DASHBOARD</h1>
    </div>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Navbar);
