import { RequestRow } from '../types';

const requests: RequestRow[] = [
  {
    requestData: '{}',
    responseData: '{}',
    routingKey: 'howdy',
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
    requestData: '{"howdy": "texas"}',
    responseData: '{"hello": "world"}',
    routingKey: 'howdy',
    status: 33,
    url: 'https://siliconhills.dev'
  }
];

export default requests;
