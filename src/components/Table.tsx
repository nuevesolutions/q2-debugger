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

import React, { FC, ReactNode } from 'react';
import {
  Table as SiliconTable,
  TableProps as SiliconTableProps
} from '@silicon-ui/table/lib';

export interface TableProps extends SiliconTableProps {
  children?: ReactNode;
  position?: string;
  width?: number | string;
  resizable?: boolean;
  ref?: any;
}

const Table: FC<TableProps> = (_props: TableProps) => {
  return <SiliconTable {..._props}>{_props?.children}</SiliconTable>;
};

Table.defaultProps = {};

export default Table;
