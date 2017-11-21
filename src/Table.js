import React from 'react';
import ReactTable from 'react-table';

import conferences from './assets/data/conferences';
import { getDates, hasOpenCall } from './lib/utils';

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
    id: 'location', // Required because our accessor is not a string
    Header: 'Location',
    accessor: d => `${d.location.city}, ${d.location.state} ${d.location.country}`,
  },
  {
    Header: 'CFP Open',
    accessor: 'cfpDeadline',
    Cell: props => hasOpenCall(props.value),
  },
  {
    Header: 'Travel Covered',
    accessor: 'travel',
  },
  {
    Header: 'Code of Conduct',
    accessor: 'coc',
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
