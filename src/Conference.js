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
    <span>
      {props.coc}
    </span>
  </div>
);

Conference.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
    ]),
    country: PropTypes.string,
    continent: PropTypes.string,
  }).isRequired,
  cfpDeadline: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  travel: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  coc: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
};

export default Conference;
