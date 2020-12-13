import React, { useState } from 'react';
// import Icon from 'Icon';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Sidebar = (props) => {

  return (
    <section className="container">
      <div className="navbar">
        <div className="navbar-link mr-5">
          <img src="/images/logo.jpg" alt="smarteye logo" />
        </div>

        <nav className="navbar-items">

        </nav>
      </div>
    </section>
  );
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Sidebar);
