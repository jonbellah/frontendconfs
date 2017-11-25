import React from 'react';
import ReactTable from 'react-table';

import conferences from '../assets/data/conferences';
import { getDates, hasOpenCall, cocLink, confLink } from '../lib/utils';

const Table = () => {
  const pageSize = conferences.length;
  const columns = [{
    Header: 'Name',
    accessor: 'name',
    Cell: props => confLink(props.original.link, props.value),
    className: 'f-w:700',
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
    width: 150,
  }, {
    Header: 'CFP Open',
    accessor: 'cfpDeadline',
    Cell: props => hasOpenCall(props.value),
    width: 110,
    className: 't-a:c j-c:c',
    headerClassName: 'j-c:c',
  }, {
    Header: 'Travel Covered',
    accessor: 'travel',
    sortable: false,
    className: 't-a:c j-c:c',
    headerClassName: 'j-c:c',
  }, {
    Header: 'Code of Conduct',
    accessor: 'coc',
    Cell: props => cocLink(props.value),
    sortable: false,
    width: 150,
    className: 't-a:c j-c:c',
    headerClassName: 'j-c:c',
  }];

  return (
    <ReactTable
      className="m-b:8"
      data={conferences}
      columns={columns}
      showPagination={false}
      defaultPageSize={pageSize}
      resizable={false}
    />
  );
};

export default Table;
