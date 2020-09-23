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
// import RequestsTable from './home/containers/RequestsTable';
import RequestsTable from './home/containers/RequestsTable';
import RequestsResizableTable from './home/containers/RequestResizableTable';
import AddApi from './addCustomApi/containers/addCustomApi';
import useRequests from '../hooks/useRequests';
import useTheme from '../hooks/useTheme';
import Icon from '../components/Icon';
import Box from '../components/Box';
import Table from '../components/TableResizable';
import ReactTable from './home/containers/ReactTable';
// import Icon from '../components/Icon';
// import {
//   Text,
//   Box,
//   Input,
//   Checkbox,
//   Datepicker,
//   Image,
//   Item,
//   DropdownOption,
//   DropdownSelect
// } from '@silicon-ui/atoms/lib';
// import theme from '../theme';
export interface HomeProps {}

const Home: FC<HomeProps> = (_props: HomeProps) => {
  const devTheme = useTheme();
  const [requests, setClear] = useRequests();
  const [addApi] = useState(false);
  const [allRequests, setAllRequests] = useState([]);

  useEffect(() => {
    const data: any = [...requests];
    setAllRequests(data);
  }, []);

  useEffect(() => {
    const data: any = [...requests];
    setAllRequests(data);
  }, [requests]);

  async function handleClear() {
    setClear();
    setAllRequests([]);
  }

  return (
    <div>
      <Box padding={1} backgroundColor="#f3f3f3" border="1px solid #cccccc">
        <Icon iconName="ban" onClick={() => handleClear()} />
      </Box>
      <ReactTable requests={allRequests} />
      {/* <Table /> */}
      {/* <Input onTextInput={(e: any) => console.log(e.target.value, 'e')} /> */}
      {/* <Checkbox onPress={() => console.log('press')} /> */}
      {/* <TableHead>head</TableHead> */}
      {/* <Datepicker /> */}
      {/* {!addApi && <Button onPress={() => handleClear()}>Clear</Button>} */}
      {/* {!addApi && <RequestsTable requests={allRequests} />} */}
      {/* <RequestsResizableTable requests={allRequests} /> */}
      {addApi && <AddApi />}
    </div>
  );
};

export default Home;
