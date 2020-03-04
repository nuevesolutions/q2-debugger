import React, { FC } from 'react';
import { TableInspector } from 'react-inspector';
import { RequestRow } from '../../../types';

export interface RequestsTableProps {
  requests: RequestRow[];
}

const RequestsTable: FC<RequestsTableProps> = (props: RequestsTableProps) => {
  return (
    <TableInspector
      data={props.requests}
      columns={['status', 'routingKey', 'requestData', 'responseData', 'url']}
    />
  );
};

export default RequestsTable;
