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
  Cell as SiliconCell,
  CellProps as SiliconCellProps
} from '@silicon-ui/table/lib';
import useTheme from '../hooks/useTheme';

export interface CellProps extends SiliconCellProps {
  width?: string;
  borderTopWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  height?: number;
  border?: number;
  backgroundColor?: string;
  borderBottomWidth?: number;
  children?: ReactNode;
  borderWidth?: number;
  style?: object;
  borderColor?: string;
}

const Cell: FC<CellProps> = (_props: CellProps) => {
  const debugTheme = useTheme();
  return (
    <SiliconCell
      borderColor="#aaaaaa"
      //  backgroundColor={debugTheme === 'dark' ? 'transparent' : '#eeeeee'}
      {..._props}
    >
      {_props.children}
    </SiliconCell>
  );
};

Cell.defaultProps = {};

export default Cell;
