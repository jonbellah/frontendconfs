import React from 'react';
import PropTypes from 'prop-types';

const Conference = props => (
  <div className="conference">
    {props.name}
  </div>
);

Conference.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Conference;
