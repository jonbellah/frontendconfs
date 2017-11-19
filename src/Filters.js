import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => (
  <div className="w:3of12 p-l:3">
    <div className="bor-bot-light-gray">
      <button onClick={props.childDoFilter} data-filter="cfpDeadline">Open Call</button>
      <button onClick={props.childDoFilter} data-filter="continent" data-filter-value="Europe">Europe</button>
    </div>
  </div>
);

Filters.propTypes = {
  childDoFilter: PropTypes.func.isRequired,
};

export default Filters;
