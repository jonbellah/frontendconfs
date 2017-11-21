import React from 'react';
import ReactTable from 'react-table';

import conferences from './assets/data/conferences';
import { getDates, hasOpenCall, cocLink } from './lib/utils';

const Table = () => {
  const pageSize = conferences.length;
  const columns = [{
    Header: 'Name',
    accessor: 'name',
  }, {
    Header: 'Date',
    accessor: 'startDate',
    Cell: props => getDates(props.original.startDate, props.original.endDate),
  }, {
    Header: 'Location',
    id: 'location',
    accessor: d => `${d.location.city}, ${d.location.state ? d.location.state : ''} ${d.location.country}`,
  }, {
    Header: 'Continent',
    id: 'continent',
    accessor: d => `${d.location.continent}`,
  }, {
    Header: 'CFP Open',
    accessor: 'cfpDeadline',
    Cell: props => hasOpenCall(props.value),
    width: 100,
  }, {
    Header: 'Travel Covered',
    accessor: 'travel',
    sortable: false,
  }, {
    Header: 'Code of Conduct',
    accessor: 'coc',
    Cell: props => cocLink(props.value),
    sortable: false,
    width: 125,
  }];

  return (
    <ReactTable
      data={conferences}
      columns={columns}
      showPagination={false}
      defaultPageSize={pageSize}
      resizable={false}
    />
  );
};

export default Table;
