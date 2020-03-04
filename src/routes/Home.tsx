import React, { FC } from 'react';
import RequestsTable from './home/containers/RequestsTable';
import useRequests from '../hooks/useRequests';

export interface HomeProps {}

const Home: FC<HomeProps> = (_props: HomeProps) => {
  const requests = useRequests();
  return <RequestsTable requests={requests} />;
};

export default Home;
