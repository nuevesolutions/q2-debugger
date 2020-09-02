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

import React, { FC, useEffect, useState } from 'react';
import RequestsTable from './home/containers/RequestsTable';
import AddApi from './addCustomApi/containers/addCustomApi';
import useRequests from '../hooks/useRequests';
import Button from '../components/Button';
import Icon from '../components/Icon';
import {
  Text,
  Box,
  Input,
  Checkbox,
  Data,
  Datepicker,
  Image,
  Item,
  TableHead,
  DropdownOption,
  DropdownSelect
} from '@silicon-ui/atoms/lib';
import theme from '../theme';
export interface HomeProps {}

const Home: FC<HomeProps> = (_props: HomeProps) => {
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

  console.log(theme, 'theme');
  return (
    <div>
      {/* <Input onTextInput={(e: any) => console.log(e.target.value, 'e')} /> */}
      {/* <Checkbox onPress={() => console.log('press')} /> */}
      {/* <TableHead>head</TableHead> */}
      {/* <Datepicker /> */}
      {!addApi && (
        <Box backgroundColor="#eee" border="1px solid gray">
          <Icon iconname="ban" onClick={() => handleClear()} />
        </Box>
      )}
      {!addApi && <RequestsTable requests={allRequests} />}
      {addApi && <AddApi />}
    </div>
  );
};

export default Home;
