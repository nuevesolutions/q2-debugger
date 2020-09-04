// /**
//  * Copyright 2020 Nueve Solutions LLC
//  *
//  * Licensed under the Apache License, Version 2.0 (the "License");
//  * you may not use this file except in compliance with the License.
//  * You may obtain a copy of the License at
//  *
//  * http://www.apache.org/licenses/LICENSE-2.0
//  *
//  * Unless required by applicable law or agreed to in writing, software
//  * distributed under the License is distributed on an "AS IS" BASIS,
//  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  * See the License for the specific language governing permissions and
//  * limitations under the License.
//  */

// import React, { FC } from 'react';
// import 'font-awesome/css/font-awesome.min.css';

// export interface IconProps {
//   iconname?: string;
//   style?: object;
//   onClick?: () => void;
// }

// export const styles = {
//   icon: {
//     cursor: 'pointer',
//     padding: '2px'
//   }
// };

// const WrappedIcon: FC<IconProps> = (props: IconProps) => {
//   const { iconname, style, onClick } = props;
//   const icon = `fa fa-${iconname}`;
//   return (
//     <i
//       {...props}
//       className={icon}
//       aria-hidden="true"
//       style={{ ...styles.icon, ...style }}
//     ></i>
//   );
// };

// WrappedIcon.defaultProps = {
//   iconname: 'ban',
//   style: {}
// };

// export default WrappedIcon;
