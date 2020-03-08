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
        <Data style={styles.columns.status}>{request.status}</Data>
        <Data style={styles.columns.routingKey}>{request.routingKey}</Data>
        <Data style={styles.columns.requestData}>
          <Inspector
            data={
              typeof request.requestData === 'string'
                ? JSON.parse(request.requestData)
                : request.requestData
            }
          />
        </Data>
        <Data style={styles.columns.responseData}>
          <Inspector
            data={
              typeof request.responseData === 'string'
                ? JSON.parse(request.responseData)
                : request.responseData
            }
          />
        </Data>
        {/* <Data style={styles.columns.url}>{request.url}</Data> */}
      </Row>
    ));
  }

  return (
    <Table>
      <div style={{ height: 20 }}>
        <Head>
          <Row>
            <Data style={styles.columns.status}>status</Data>
            <Data style={styles.columns.routingKey}>routing key</Data>
            <Data style={styles.columns.requestData}>request data</Data>
            <Data style={styles.columns.responseData}>response data</Data>
            {/* <Data style={styles.columns.url}>url</Data> */}
          </Row>
        </Head>
      </div>
      <Body>{renderRequests(props.requests)}</Body>
    </Table>
  );
};

const styles = {
  columns: {
    status: { width: '10%' },
    routingKey: { width: '20%' },
    requestData: { width: '30%' },
    responseData: { width: '30%' },
    url: { width: '10%' }
  }
};

export default RequestsTable;
