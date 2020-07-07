import React, { FC } from 'react';
import AddCustomApi from './addCustomApi/containers/addCustomApi';

export interface AddApi {}

const AddApi: FC<AddApi> = (_props: AddApi) => {
  return (
    <div>
      <AddCustomApi />
    </div>
  );
};

export default AddApi;
