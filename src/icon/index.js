import React from 'react';
import PropTypes from 'prop-types';
import iconPath from './library';

const Icon = ({ size, color, icon }) => (
  <svg
    viewBox={iconPath[icon].box}
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {
      iconPath[icon].path.map((item, i) => (
        <path key={ i } fillRule="evenodd" fill={color} d={item} />
      ))
    }
  </svg>
);

Icon.defaultProps = {
  size: 16,
  color: "#fff"
};

Icon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Icon;
