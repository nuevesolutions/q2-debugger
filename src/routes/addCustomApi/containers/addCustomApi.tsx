import React, { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

export interface AddCustomApiProps {}

const AddCustomApi: FC<AddCustomApiProps> = (props: AddCustomApiProps) => {
  const history = useHistory();
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
      padding: '10px',
    },
  },
};

export default AddCustomApi;
