import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => (
  <div className="w:3of12 p-l:3">

    <button onClick={props.childDoFilter} data-filter="cfpDeadline">Open Call</button>
    <div>
      <input id="europe" onChange={props.childDoFilter}type="radio" name="continent" data-filter="continent" data-filter-value="Europe" value="Europe" />
      <label htmlFor="europe">Europe</label>

      <input id="namerica" onChange={props.childDoFilter} type="radio" name="continent" data-filter="continent" data-filter-value="North America" value="North America" />
      <label htmlFor="namerica">North America</label>
    </div>
  </div>
);

Filters.propTypes = {
  childDoFilter: PropTypes.func.isRequired,
};

export default Filters;
