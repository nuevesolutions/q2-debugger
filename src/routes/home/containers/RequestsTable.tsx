/**
 * Copyright 2020 Nueve Solutions LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
    <Table style={{ paddingBottom: '10px' }}>
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
      overflowWrap: 'break-word'
    } as React.CSSProperties,
    responseData: {
      width: '35%',
      overflowWrap: 'break-word'
    } as React.CSSProperties,
    url: { width: '10%' }
  }
};

export default RequestsTable;
