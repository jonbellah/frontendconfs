import React from 'react';
import PropTypes from 'prop-types';

const Circle = props => (
  <svg height="12" width="12">
    <circle cx="6" cy="6" r="6" fill={props.color} />
  </svg>
);

Circle.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Circle;
