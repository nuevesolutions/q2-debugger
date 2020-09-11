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
// import { Table, Head, Body, Row, Data } from 'table-inspector';
import { Inspector } from 'react-inspector';
import { RequestRow } from '../../../types';
import Row from '../../../components/Row';
import Table from '../../../components/Table';
import Cell from '../../../components/Cell';
import { Box } from '@silicon-ui/atoms';
import useTheme from '../../../hooks/useTheme';

export interface RequestsTableProps {
  requests: RequestRow[];
}

const RequestsTable: FC<RequestsTableProps> = (props: RequestsTableProps) => {
  const tableRef = useRef<any>();
  const [width, setWidth] = useState(0);
  const debugTheme = useTheme();

  useEffect(() => {
    setWidth(tableRef.current?.offsetWidth || 0);
  }, [tableRef]);

  useEffect(() => {
    function handleResize() {
      setWidth(tableRef.current?.offsetWidth || 0);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function renderRequests(requests: RequestRow[]) {
    return requests.map((request: RequestRow, index) => (
      <Row key={request.status + request.routingKey + request.url} width="100%">
        <Cell
          width="10%"
          // borderTopWidth={1}
          borderLeftWidth={1}
          borderBottomWidth={1}
        >
          <Inspector
            data={request.status}
            theme={debugTheme === 'dark' ? 'chromeDark' : 'chromeLight'}
          />
        </Cell>
        <Cell
          width="10%"
          // borderTopWidth={1}
          borderLeftWidth={1}
          borderBottomWidth={1}
        >
          <Inspector
            data={request.routingKey}
            theme={debugTheme === 'dark' ? 'chromeDark' : 'chromeLight'}
          />
        </Cell>
        <Cell
          width="35%"
          // borderTopWidth={1}
          borderLeftWidth={1}
          borderBottomWidth={1}
          style={{ whiteSpace: 'normal' }}
        >
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
          // borderTopWidth={1}
          borderLeftWidth={1}
          borderRightWidth={1}
          borderBottomWidth={1}
          style={{ whiteSpace: 'normal' }}
          width="45%"
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
    <Box>
      {/* <Table position="absolute" width={width}>
        <Row width="100%">
          <Cell
            width="100%"
            borderTopWidth={1}
            borderLeftWidth={1}
            borderRightWidth={1}
            height={50}
          />
        </Row>
        <Row width="100%">
          <Cell width="100%" border={1} height={50} />
        </Row>
        <Row width="100%">
          <Cell width="100%" border={1} height={50} />
        </Row>
        <Row width="100%">
          <Cell width="100%" border={1} height={50} />
        </Row>
      </Table> */}
      <Table style={{ paddingBottom: '10px' }} width="100%" resizable>
        <Row style={{ height: '40px' }} width="100%">
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
            // backgroundColor="#eeeeee"
            backgroundColor={debugTheme === 'dark' ? 'transparent' : '#eeeeee'}
          >
            <span
              style={{ color: debugTheme === 'dark' ? '#aaaaaa' : 'black' }}
            >
              Routing key
            </span>
          </Cell>
          <Cell
            width="35%"
            borderLeftWidth={1}
            borderBottomWidth={1}
            // backgroundColor="#eeeeee"
            backgroundColor={debugTheme === 'dark' ? 'transparent' : '#eeeeee'}
          >
            <span
              style={{ color: debugTheme === 'dark' ? '#aaaaaa' : 'black' }}
            >
              Request data
            </span>
          </Cell>
          <Cell
            borderLeftWidth={1}
            borderRightWidth={1}
            borderBottomWidth={1}
            // backgroundColor="#eeeeee"
            backgroundColor={debugTheme === 'dark' ? 'transparent' : '#eeeeee'}
            width="45%"
          >
            <span
              style={{ color: debugTheme === 'dark' ? '#aaaaaa' : 'black' }}
            >
              Response data
            </span>
          </Cell>
        </Row>
        {renderRequests(requests)}
      </Table>
    </Box>
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
      width: '45%',
      overflowWrap: 'break-word'
    } as React.CSSProperties,
    url: { width: '10%' }
  }
};

export default RequestsTable;
