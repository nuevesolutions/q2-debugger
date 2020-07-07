import React, { FC, useEffect, useState } from 'react';
import { Table, Head, Body, Row, Data } from 'table-inspector';
import { Inspector } from 'react-inspector';
import { RequestRow } from '../../../types';

export interface RequestsTableProps {
  requests: RequestRow[];
}

const RequestsTable: FC<RequestsTableProps> = (props: RequestsTableProps) => {
  function renderRequests(requests: RequestRow[]) {
    // const [allRequests, setAllRequests] = useState([]);

    // useEffect(() => {
    //   let data: any = [...requests];
    //   setAllRequests(data.reverse());
    // }, [props.requests]);
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
      <div>
        <Head>
          <Row style={{ height: '40px' }}>
            <Data style={styles.columns.status}>Status</Data>
            <Data style={styles.columns.routingKey}>Routing key</Data>
            <Data style={styles.columns.requestData}>Request data</Data>
            <Data style={styles.columns.responseData}>Response data</Data>
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
    routingKey: { width: '10%' },
    requestData: {
      width: '35%',
      overflowWrap: 'break-word',
    } as React.CSSProperties,
    responseData: {
      width: '35%',
      overflowWrap: 'break-word',
    } as React.CSSProperties,
    url: { width: '10%' },
  },
};

export default RequestsTable;
