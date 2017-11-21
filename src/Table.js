import React from 'react';
import ReactTable from 'react-table';

import conferences from './assets/data/conferences';
import { getDates } from './lib/utils';

const ConfTable = () => {
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
  }];

  return (
    <ReactTable
      data={conferences}
      columns={columns}
      showPagination={false}
      defaultPageSize={pageSize}
    />
  );
};

export default ConfTable;
