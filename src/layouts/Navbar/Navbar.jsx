import React from 'react';
import { connect } from 'react-redux';
import { openSidebar } from 'store/actions/appsControl';
import Icon from 'icon';

const Navbar = ({ title, dispatch, showSidebar }) => {

  return (
    <div className="shadow bg-white py-4 flex items-center justify-between">
      <button onClick={ () => dispatch(openSidebar(!showSidebar)) } className="px-5 z-10">
        <Icon icon={ `${showSidebar ? 'menu-left' : 'menu-right' }` } color="#000" />
      </button>

      <h1 className="w-full text-center absolute md:relative">{ title }</h1>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state.appsControl
});

export default connect(mapStateToProps)(Navbar);
