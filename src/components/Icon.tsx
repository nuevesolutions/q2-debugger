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

import React, { FC, useState } from 'react';
import styled from '@emotion/styled';
import useTheme from '../hooks/useTheme';

export interface IconProps {
  iconName?: string;
  onClick?: () => void;
}

const Icon: FC<IconProps> = (_props: IconProps) => {
  const [entered, setEntered] = useState(false);
  const theme = useTheme();
  const { iconName, onClick } = _props;

  async function handleClick() {
    if (onClick) {
      onClick();
    }
  }
  const className = `fa fa-${iconName}`;
  return (
    <i
      className={className}
      title="Clear"
      onMouseEnter={() => setEntered(true)}
      onMouseLeave={() => setEntered(false)}
      style={{
        // color: devTheme === 'dark' ? '#aaaaaa' : '#6e6e6e',
        color: entered ? theme.hoverIconColor : theme.iconColor,
        opacity: 0.8,
        fontSize: '16px',
        paddingTop: '4px',
        cursor: 'pointer',
        transform: 'scaleX(-1)'
      }}
      onClick={() => handleClick()}
    ></i>
  );
};

export default styled(Icon)``;
