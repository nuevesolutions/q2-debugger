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

import React, { FC, useEffect, useState, useRef } from 'react';
import { Inspector } from 'react-inspector';
import { RequestRow } from '../../../types';
import Row from '../../../components/Row';
import Table from '../../../components/Table';
import Cell from '../../../components/Cell';
import Box from '../../../components/Box';
// import { Box } from '@silicon-ui/atoms/lib';
import useTheme from '../../../hooks/useTheme';

export interface RequestsTableProps {
  requests: RequestRow[];
}

const RequestsTable: FC<RequestsTableProps> = (props: RequestsTableProps) => {
  const debugTheme = useTheme();

  function renderRequests(requests: RequestRow[]) {
    return requests.map((request: RequestRow, index) => (
      <Row key={request.status + request.routingKey + request.url} width="100%">
        <Cell width="10%" borderLeftWidth={1} borderBottomWidth={1}>
          <Inspector
            data={request.status}
            theme={debugTheme === 'dark' ? 'chromeDark' : 'chromeLight'}
          />
        </Cell>
        <Cell width="10%" borderLeftWidth={1} borderBottomWidth={1}>
          <Inspector
            data={request.routingKey}
            theme={debugTheme === 'dark' ? 'chromeDark' : 'chromeLight'}
          />
        </Cell>
        <Cell width="40%" borderLeftWidth={1} borderBottomWidth={1}>
          <Inspector
            theme={debugTheme === 'dark' ? 'chromeDark' : 'chromeLight'}
            data={
              typeof request.requestData === 'string'
                ? JSON.parse(request.requestData)
                : request.requestData
            }
          />
        </Cell>
        <Cell
          borderLeftWidth={1}
          borderRightWidth={1}
          borderBottomWidth={1}
          // width="40%"
        >
          <Inspector
            theme={debugTheme === 'dark' ? 'chromeDark' : 'chromeLight'}
            data={
              typeof request.responseData === 'string'
                ? JSON.parse(request.responseData)
                : request.responseData
            }
          />
        </Cell>
      </Row>
    ));
  }
  const { requests } = props;
  return (
    <Box maxWidth="100%" overflowX="hidden" overflowY="visible">
      <Table
        width="100%"
        resizable
        // ref={tableRef}
        style={{ paddingBottom: '10px' }}
      >
        <Row width="100%" style={{ backgroundColor: 'red' }}>
          <Cell
            width="10%"
            borderLeftWidth={1}
            borderBottomWidth={1}
            backgroundColor={debugTheme === 'dark' ? 'transparent' : '#eeeeee'}
            height={20}
          >
            <span
              style={{ color: debugTheme === 'dark' ? '#aaaaaa' : 'black' }}
            >
              Status
            </span>
          </Cell>
          <Cell
            width="10%"
            borderLeftWidth={1}
            borderBottomWidth={1}
            backgroundColor={debugTheme === 'dark' ? 'transparent' : '#eeeeee'}
            height={20}
          >
            <span
              style={{ color: debugTheme === 'dark' ? '#aaaaaa' : 'black' }}
            >
              Routing key
            </span>
          </Cell>
          <Cell
            width="40%"
            borderLeftWidth={1}
            borderBottomWidth={1}
            backgroundColor={debugTheme === 'dark' ? 'transparent' : '#eeeeee'}
            height={20}
          >
            <span
              style={{ color: debugTheme === 'dark' ? '#aaaaaa' : 'black' }}
            >
              Request Data
            </span>
          </Cell>
          <Cell
            // width="40%"
            borderLeftWidth={1}
            borderBottomWidth={1}
            backgroundColor={debugTheme === 'dark' ? 'transparent' : '#eeeeee'}
            height={20}
          >
            <span
              style={{ color: debugTheme === 'dark' ? '#aaaaaa' : 'black' }}
            >
              Response Data
            </span>
          </Cell>
        </Row>
        {renderRequests(requests)}
        <Row width="100%" style={{ backgroundColor: 'red' }}>
          <Cell
            width="10%"
            borderLeftWidth={1}
            borderBottomWidth={1}
            backgroundColor={debugTheme === 'dark' ? 'transparent' : '#eeeeee'}
          >
            <span
              style={{ color: debugTheme === 'dark' ? '#aaaaaa' : 'black' }}
            >
              Status
            </span>
          </Cell>
          <Cell
            width="10%"
            borderLeftWidth={1}
            borderBottomWidth={1}
            backgroundColor={debugTheme === 'dark' ? 'transparent' : '#eeeeee'}
          >
            <span
              style={{ color: debugTheme === 'dark' ? '#aaaaaa' : 'black' }}
            >
              Routing key
            </span>
          </Cell>
          <Cell
            width="40%"
            borderLeftWidth={1}
            borderBottomWidth={1}
            backgroundColor={debugTheme === 'dark' ? 'transparent' : '#eeeeee'}
          >
            <span
              style={{ color: debugTheme === 'dark' ? '#aaaaaa' : 'black' }}
            >
              Request Data
            </span>
          </Cell>
          <Cell
            // width="40%"
            borderLeftWidth={1}
            borderBottomWidth={1}
            backgroundColor={debugTheme === 'dark' ? 'transparent' : '#eeeeee'}
          >
            <span
              style={{ color: debugTheme === 'dark' ? '#aaaaaa' : 'black' }}
            >
              Response Data
            </span>
          </Cell>
        </Row>
      </Table>
    </Box>
  );
};

export default RequestsTable;
