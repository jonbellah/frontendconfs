import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getDates, hasOpenCall } from './lib/utils';

class Conference extends Component {
  static renderCoc(coc) {
    if (coc === false) {
      return <div />;
    }

    return (
      <a href={coc}>
        Link
      </a>
    );
  }

  render() {
    const {
      link,
      name,
      startDate,
      endDate,
      cfpDeadline,
      travel,
      coc,
    } = this.props;

    return (
      <tr className="conference bor-bot-light-gray">
        <td className="p-t:2 p-b:2">
          <a href={link}>
            {name}
          </a>
        </td>
        <td>
          {getDates(startDate, endDate)}
        </td>
        <td>
          {this.props.location.city}, {this.props.location.state} {this.props.location.country}
        </td>
        <td>
          {this.props.location.continent}
        </td>
        <td>
          {hasOpenCall(cfpDeadline)}
        </td>
        <td>
          {travel}
        </td>
        <td>
          {Conference.renderCoc(coc)}
        </td>
      </tr>
    );
  }
}

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
