import React from 'react';
import PropTypes from 'prop-types';

import { getDates, hasOpenCall } from './lib/utils';

const Conference = props => (
  <div className="conference d:f flx-d:r">
    <div className="w:3of12">
      <a href={props.link}>
        {props.name}
      </a>
    </div>
    <div className="w:3of12">
      {getDates(props.startDate, props.endDate)}
    </div>
    <div className="w:2of12">
      {props.location.city}, {props.location.state} {props.location.country}
    </div>
    <div className="w:2of12">
      {hasOpenCall(props.cfpDeadline)}
    </div>
    <div className="w:2of12">
      {props.travel}
    </div>
    <div className="w:2of12">
      {props.coc}
    </div>
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
