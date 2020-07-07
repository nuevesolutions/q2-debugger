import { RequestRow } from '../types';

const requests: RequestRow[] = [
  {
    requestData: '{}',
    responseData: '{}',
    routingKey: 'howdy',
    status: 200,
    url: 'https://nuevesolutions.com',
  },
  {
    requestData: '{}',
    responseData: '{}',
    routingKey: 'hello',
    status: 500,
    url: 'https://example.com',
  },
  {
    requestData:
      '{"howdy": "texas Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}',
    responseData: '{"hello": "world"}',
    routingKey: 'howdy',
    status: 33,
    url: 'https://siliconhills.dev',
  },
];

export default requests;
