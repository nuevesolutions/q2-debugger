import React, { FC, useState, useEffect, useLayoutEffect } from 'react';
import { useTable } from 'react-table';
import { Inspector, chromeLight } from 'react-inspector';
import { RequestRow } from '../../../types';
import useTheme from '../../../hooks/useTheme';
import Table from '../../../components/Table';
import Cell from '../../../components/Cell';
import Row from '../../../components/Row';
import Box from '../../../components/Box';
import Toast from '../../../components/Toast';

export interface RequestsTableProps {
  requests: RequestRow[];
}

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const ReactTable: FC<RequestsTableProps> = (props: RequestsTableProps) => {
  const { requests } = props;
  const [width, height] = useWindowSize();
  const [inspector, setInspector] = useState(false);
  const [hoverCell, setHoverCell] = useState('');
  const [hoverRow, setHoverRow] = useState('');
  const [lastRowHeight, setLastRowHeight] = useState(20);
  const [toolTip, setTooltip] = useState(false);
  const theme = useTheme();

  const data = React.useMemo(() => [...requests], [requests]);

  useEffect(() => {}, [toolTip]);

  const columns: any = React.useMemo(
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
        width: '45%'
      },
      {
        Header: 'Response Data',
        accessor: 'responseData',
        width: ''
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

  useEffect(() => {
    const rowHeight = document.getElementById('row')?.clientHeight;
    if (rowHeight && requests.length > 0) {
      setLastRowHeight(height - rowHeight - 62);
    } else {
      setLastRowHeight(height - 62);
    }
  }, [rows, height, inspector, requests]);

  const handleClick = (e: any, value: string) => {
    const input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = JSON.stringify(value);
    if (value) setTooltip(true);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    e.preventDefault();
    setTimeout(() => {
      setTooltip(false);
    }, 2000);
  };

  return (
    <div>
      <Box maxWidth="100%" overflowX="hidden" overflowY="visible">
        <Table width="100%" resizable {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <Row width="100%" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  return (
                    <Cell
                      width={column?.width as string}
                      onMouseEnter={() => setHoverCell(column.id)}
                      onMouseLeave={() => setHoverCell('')}
                      backgroundColor={
                        hoverCell !== column.id
                          ? theme.headerCellBg
                          : theme.hoverHeaderCellBg
                      }
                      height={20}
                      paddingLeft={1}
                      paddingTop={1}
                      paddingBottom={1}
                      borderLeftWidth={0.5}
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
          <tbody {...getTableBodyProps()} id="row">
            {rows.map((row, index) => {
              prepareRow(row);
              return (
                <Row
                  width="100%"
                  {...row.getRowProps()}
                  backgroundColor={
                    hoverRow !== row?.id
                      ? index % 2
                        ? theme.evenRowBg
                        : theme.oddRowBg
                      : theme.hoverRowBg
                  }
                  height="100%"
                  onMouseEnter={() => setHoverRow(row.id)}
                  onMouseLeave={() => setHoverRow('')}
                >
                  {row.cells.map((cell) => {
                    return (
                      <Cell
                        id="myCell"
                        onClick={() => setInspector(!inspector)}
                        onContextMenu={(e) => handleClick(e, cell.value)}
                        borderLeftWidth={0.5}
                        paddingLeft={1}
                        height={0}
                      >
                        {!(
                          cell.column.id === 'status' ||
                          cell.column.id === 'routingKey'
                        )
                          ? cell?.value !== null && (
                              <Box paddingTop={1} height="100%">
                                <Inspector
                                  theme={{
                                    ...chromeLight,
                                    ...{
                                      BASE_BACKGROUND_COLOR: 'transparent',
                                      BASE_COLOR: theme.cellTextColor
                                    }
                                  }}
                                  data={
                                    typeof cell.value === 'string'
                                      ? JSON.parse(cell.value)
                                      : cell.value
                                  }
                                />
                              </Box>
                            )
                          : cell.value}
                      </Cell>
                    );
                  })}
                </Row>
              );
            })}
          </tbody>
          {headerGroups.map((headerGroup) => (
            <Row
              width="100%"
              {...headerGroup.getHeaderGroupProps()}
              backgroundColor={theme.evenRowBg}
            >
              {headerGroup.headers.map((column) => {
                return (
                  <Cell
                    width={column?.width as string}
                    height={lastRowHeight}
                    paddingBottom={1}
                    borderLeftWidth={0.5}
                  ></Cell>
                );
              })}
            </Row>
          ))}
          {toolTip ? <Toast /> : null}
        </Table>
      </Box>
    </div>
  );
};

export default ReactTable;
