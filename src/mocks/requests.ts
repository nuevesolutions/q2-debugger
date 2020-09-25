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

import { RequestRow } from '../types';

const requests: RequestRow[] = [
  {
    requestData: '{}',
    responseData: '{}',
    routingKey: 'world',
    status: 200,
    url: 'https://nuevesolutions.com'
  },
  {
    requestData: '{}',
    responseData: '{}',
    routingKey: 'hello',
    status: 500,
    url: 'https://example.com'
  },
  {
    requestData:
      '{"howdy": "texas Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}',
    responseData: '{"hello": "world"}',
    routingKey: 'hello',
    status: 500,
    url: 'https://siliconhills.dev'
  },
  {
    requestData: '{}',
    responseData: '{}',
    routingKey: 'hello',
    status: 500,
    url: 'https://example.com'
  }
];

export default requests;
