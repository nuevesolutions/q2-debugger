import React, { FC, useState } from 'react';
import { useTable } from 'react-table';
import { Inspector } from 'react-inspector';
import { RequestRow } from '../../../types';
import Table from '../../../components/Table';
import Cell from '../../../components/Cell';
import Row from '../../../components/Row';
import Box from '../../../components/Box';

export interface RequestsTableProps {
  requests: RequestRow[];
}

const ReactTable: FC<RequestsTableProps> = (props: RequestsTableProps) => {
  const { requests } = props;
  const [hoverCell, setHoverCell] = useState('');
  const [hoverRow, setHoverRow] = useState('');
  const data = React.useMemo(() => requests, [requests]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Status',
        accessor: 'status',
        width: '10%'
      },
      {
        Header: 'Routing Key',
        accessor: 'routingKey',
        width: '10%'
      },
      {
        Header: 'Request Data',
        accessor: 'requestData',
        width: '40%'
      },
      {
        Header: 'Response Data',
        accessor: 'responseData',
        width: '40%'
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data });

  const handleClick = (e: any, value: string) => {
    const copiedText = document.createElement('textarea');
    copiedText.value = value;
    copiedText.setAttribute('readonly', '');
    copiedText.style.position = 'absolute';
    copiedText.style.left = '-9999px';
    document.body.appendChild(copiedText);
    copiedText.select();
    document.execCommand('copy');
    document.body.removeChild(copiedText);
    e.preventDefault();
  };

  return (
    <Box maxWidth="100%" overflowX="hidden" overflowY="visible">
      <Table width="100%" resizable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <Row width="100%" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <Cell
                    width={column?.width as string}
                    // backgroundColor="#e6e6e6"
                    onMouseEnter={() => setHoverCell(column.id)}
                    onMouseLeave={() => setHoverCell('')}
                    backgroundColor={
                      hoverCell !== column.id ? '#f3f3f3' : '#e6e6e6'
                    }
                    height={20}
                    paddingLeft={1}
                    paddingTop={1}
                    paddingBottom={1}
                    borderLeftWidth={1}
                    borderBottomWidth={1}
                    borderTopWidth={1}
                    {...column.getHeaderProps()}
                  >
                    {column.render('Header')}
                  </Cell>
                );
              })}
            </Row>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <Row
                width="100%"
                {...row.getRowProps()}
                // backgroundColor={hoverRow !== row.id ? '#f3f3f3' : '#f1f6fd'}
                height={index === rows.length - 1 ? '100vh' : '0vh'}
                onMouseEnter={() => setHoverRow(row.id)}
                onMouseLeave={() => setHoverRow('')}
              >
                {row.cells.map((cell) => {
                  return (
                    <Cell
                      id="myCell"
                      onContextMenu={(e) => handleClick(e, cell.value)}
                      borderLeftWidth={1}
                      borderBottomWidth={1}
                      paddingLeft={1}
                      // backgroundColor="red"
                    >
                      {!(
                        cell.column.id === 'status' ||
                        cell.column.id === 'routingKey'
                      ) ? (
                        <Inspector
                          data={
                            typeof cell.value === 'string'
                              ? JSON.parse(cell.value)
                              : cell.value
                          }
                        />
                      ) : (
                        cell.value
                      )}
                    </Cell>
                  );
                })}
              </Row>
            );
          })}
        </tbody>
      </Table>
    </Box>
  );
};

export default ReactTable;
