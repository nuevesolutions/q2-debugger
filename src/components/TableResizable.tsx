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
      {/* <Table position="absolute" width={width}>
        <Row width="100%">
          <Cell
            width="100%"
            borderTopWidth={1}
            borderLeftWidth={1}
            borderRightWidth={1}
          />
        </Row>
        <Row width="100%">
          <Cell width="100%" border={1} />
        </Row>
      </Table> */}
      <Table width="100%" resizable ref={tableRef}>
        <Row width="100%">
          <Cell
            backgroundColor="white"
            borderLeftWidth={1}
            borderTopWidth={1}
            width="20%"
            height=""
          >
            One
          </Cell>
          <Cell
            backgroundColor="white"
            borderTopWidth={1}
            borderLeftWidth={1}
            width="20%"
            style={{ whiteSpace: 'normal' }}
          >
            texas Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industrys standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, a
          </Cell>
          <Cell
            borderTopWidth={1}
            borderLeftWidth={1}
            backgroundColor="white"
            width="60%"
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
          >
            Four
          </Cell>
          <Cell
            backgroundColor="white"
            borderTopWidth={1}
            borderLeftWidth={1}
            borderBottomWidth={1}
            width="20%"
          >
            Five
          </Cell>
          <Cell
            backgroundColor="white"
            borderTopWidth={1}
            borderLeftWidth={1}
            borderBottomWidth={1}
            width="60%"
          >
            Six
          </Cell>
        </Row>
      </Table>
    </Box>
  );
};

export default TableResize;
