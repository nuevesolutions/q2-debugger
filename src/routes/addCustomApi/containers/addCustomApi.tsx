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

export interface AddCustomApiProps {}

const AddCustomApi: FC<AddCustomApiProps> = (_props: AddCustomApiProps) => {
  const [key, setKey] = useState('');
  const [payload, setPayload] = useState('');
  return (
    <div style={styles.container.box}>
      <div>
        <p>Routing key</p>
        <input
          placeholder="Enter routing key"
          onChange={(e: any) => setKey(e.target.value)}
        />
      </div>
      <div>
        <p>Payload</p>
        <textarea
          placeholder="Payload"
          rows={8}
          cols={100}
          onChange={(e: any) => setPayload(e.target.value)}
        />
      </div>
      <button onClick={() => console.log(key, payload, 'pay load')}>
        Submit
      </button>
      <div>
        <p>Response</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    box: {
      padding: '10px'
    }
  }
};

export default AddCustomApi;
