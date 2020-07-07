import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RequestsTable from './home/containers/RequestsTable';
import useRequests from '../hooks/useRequests';

export interface HomeProps {}

const Home: FC<HomeProps> = (_props: HomeProps) => {
  const [requests, setClear] = useRequests();
  const history = useHistory();
  const [allRequests, setAllRequests] = useState([]);

  useEffect(() => {
    const data: any = [...requests];
    setAllRequests(data);
  }, []);

  useEffect(() => {
    const data: any = [...requests];
    setAllRequests(data);
  }, [requests]);

  // async function handleClick() {
  //   const dd = {
  //     requestData: '{"howdy": "texassfsf"}',
  //     responseData: '{"hello": "world"}',
  //     routingKey: 'howdy',
  //     status: Date.now().toString(),
  //     url: 'https://siliconhills.dev',
  //   };

  //   const data: any = [...allRequests];
  //   data.push(dd);

  //   setAllRequests(data);
  // }

  async function handleClear() {
    setClear();
    setAllRequests([]);
  }

  return (
    <div>
      <button onClick={() => handleClear()}>Clear</button>
      <button onClick={() => history.push('/add-api')}>Add</button>
      <RequestsTable requests={allRequests} />
    </div>
  );
  // return <RequestsTable requests={requests} />;
};

export default Home;
