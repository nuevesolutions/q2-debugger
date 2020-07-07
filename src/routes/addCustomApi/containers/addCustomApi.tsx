import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

export interface AddCustomApiProps {}

const AddCustomApi: FC<AddCustomApiProps> = (props: AddCustomApiProps) => {
  const history = useHistory();
  return (
    <div style={styles.container.box}>
      <div>
        <p>Routing key</p>
        <input
          placeholder="Enter routing key"
          onChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <div>
        <p>Payload</p>
        <textarea
          placeholder="Payload"
          rows={8}
          cols={100}
          onChange={(e: any) => console.log(e.target.value)}
        />
      </div>
      <button>Submit</button>
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
