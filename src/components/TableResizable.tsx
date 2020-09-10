import React, { useState, useRef, useEffect } from 'react';
// import { Row, Cell, Table } from '@silicon-ui/table/lib';
import Table from './Table';
import Row from './Row';
import Cell from './Cell';
import Box from './Box';

const TableResize = () => {
  const tableRef = useRef<any>();
  const [width, setWidth] = useState(0);

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
  return (
    <Box>
      <Table position="absolute" width={width}>
        <Row width="100%">
          <Cell
            width="100%"
            borderTopWidth={1}
            borderLeftWidth={1}
            borderRightWidth={1}
            minHeight={25}
          />
        </Row>
        <Row width="100%">
          <Cell width="100%" border={1} minHeight={25} />
        </Row>
      </Table>
      <Table width="100%" resizable ref={tableRef}>
        <Row width="100%">
          <Cell
            backgroundColor="white"
            borderLeftWidth={1}
            borderTopWidth={1}
            minHeight={25}
            width="20%"
          >
            One
          </Cell>
          <Cell
            backgroundColor="white"
            borderTopWidth={1}
            borderLeftWidth={1}
            width="20%"
            minHeight={25}
            style={{ whiteSpace: 'normal' }}
          >
            Two three four five
          </Cell>
          <Cell
            borderTopWidth={1}
            borderLeftWidth={1}
            backgroundColor="white"
            minHeight={25}
          >
            Three
          </Cell>
        </Row>
        <Row width="100%">
          <Cell
            backgroundColor="white"
            borderTopWidth={1}
            borderLeftWidth={1}
            borderBottomWidth={1}
            width="20%"
            minHeight={25}
          >
            Four
          </Cell>
          <Cell
            backgroundColor="white"
            borderTopWidth={1}
            borderLeftWidth={1}
            borderBottomWidth={1}
            width="20%"
            minHeight={25}
          >
            Five
          </Cell>
          <Cell
            backgroundColor="white"
            borderTopWidth={1}
            borderLeftWidth={1}
            borderBottomWidth={1}
            minHeight={25}
          >
            Six
          </Cell>
        </Row>
      </Table>
    </Box>
  );
};

export default TableResize;
