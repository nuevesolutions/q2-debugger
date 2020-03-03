import React, { FC, useEffect, useState } from 'react';
import queryString from 'query-string';

export interface AppProps {
  logger: any;
}

const App: FC<AppProps> = (props: AppProps) => {
  const { logger } = props;

  const [requests, setRequests] = useState<any[]>([]);

  function handleRequest(request: any) {
    let body: any = {};
    try {
      body = JSON.parse(JSON.parse(request?.request?.postData?.text || '{}'));
    } catch (err) {
      return;
    }
    if (request.request.method !== 'POST' || !body?.formData) return;
    let formData: any = {};
    try {
      formData = queryString.parse(body.formData);
    } catch (err) {
      return;
    }
    const routingKey = formData.routing_key;
    let data = atob(decodeURI(formData.data));
    try {
      data = JSON.parse(data);
    } catch (err) {}
    setRequests([
      {
        routingKey,
        data,
        url: request.request.url,
        status: request.response.status
      },
      ...requests
    ]);
  }

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener(handleRequest);
    return () =>
      chrome.devtools.network.onRequestFinished.removeListener(handleRequest);
  }, [requests]);

  function renderRequests() {
    return requests.map(request => (
      <tr key={request?.routingKey}>
        <td>{request?.status}</td>
        <td>{request?.routingKey}</td>
        <td>{JSON.stringify(request?.data)}</td>
        <td>{request?.url}</td>
      </tr>
    ));
  }

  return (
    <div>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th align="left">
              <strong>STATUS</strong>
            </th>
            <th align="left">
              <strong>ROUTING_KEY</strong>
            </th>
            <th align="left">
              <strong>DATA</strong>
            </th>
            <th align="left">
              <strong>URL</strong>
            </th>
          </tr>
        </thead>
        <tbody>{renderRequests()}</tbody>
      </table>
    </div>
  );
};

export default App;
