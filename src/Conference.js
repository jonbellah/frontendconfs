import React from 'react';
import PropTypes from 'prop-types';

import { getDates, hasOpenCall } from './lib/utils';

const Conference = props => (
  <div className="conference">
    <a href={props.link}>
      {props.name}
    </a>
    <span>
      {getDates(props.startDate, props.endDate)}
    </span>
    <span>
      {props.location.city}, {props.location.state} {props.location.country}
    </span>
    <span>
      {hasOpenCall(props.cfpDeadline)}
    </span>
    <span>
      {props.travel}
    </span>
  </div>
);

Conference.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default Conference;
