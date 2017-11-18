import React from 'react';
import PropTypes from 'prop-types';

import { getDates } from './lib/utils';

const Conference = props => (
  <div className="conference">
    <a href={props.link}>
      {props.name}
    </a>
    {getDates(props.startDate, props.endDate)}
  </div>
);

Conference.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default Conference;
