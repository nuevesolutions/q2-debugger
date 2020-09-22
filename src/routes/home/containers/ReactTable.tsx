import React, { FC } from 'react';
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
                    height={20}
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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Row width="100%" {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <Cell
                      borderLeftWidth={1}
                      borderBottomWidth={1}
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
