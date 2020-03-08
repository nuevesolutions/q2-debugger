import React, { FC } from 'react';
import { Table, Head, Body, Row, Data } from 'table-inspector';
import { Inspector } from 'react-inspector';
import { RequestRow } from '../../../types';

export interface RequestsTableProps {
  requests: RequestRow[];
}

const RequestsTable: FC<RequestsTableProps> = (props: RequestsTableProps) => {
  function renderRequests(requests: RequestRow[]) {
    return requests.map((request: RequestRow) => (
      <Row key={request.status + request.routingKey + request.url}>
        <Data>{request.status}</Data>
        <Data>{request.routingKey}</Data>
        <Data>
          <Inspector
            data={
              typeof request.requestData === 'string'
                ? JSON.parse(request.requestData)
                : request.requestData
            }
          />
        </Data>
        <Data>
          <Inspector
            data={
              typeof request.responseData === 'string'
                ? JSON.parse(request.responseData)
                : request.responseData
            }
          />
        </Data>
        <Data>{request.url}</Data>
      </Row>
    ));
  }

  return (
    <Table>
      <Head>
        <Row>
          <Data>status</Data>
          <Data>routing key</Data>
          <Data>request data</Data>
          <Data>response data</Data>
          <Data>url</Data>
        </Row>
      </Head>
      <Body>{renderRequests(props.requests)}</Body>
    </Table>
  );
};

export default RequestsTable;
