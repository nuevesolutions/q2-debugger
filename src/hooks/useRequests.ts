import queryString from 'query-string';
import { useEffect, useState } from 'react';
import requestsMock from '../mocks/requests';
import useEnvironment from './useEnvironment';
import { RequestRow, DevtoolsNetworkRequest } from '../types';

export function tmp() {
  return [] as RequestRow[];
}

export default function useRequests(): RequestRow[] {
  const environment = useEnvironment();
  if (environment === 'tab') return requestsMock;
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener(handleRequest);
    return () =>
      chrome.devtools.network.onRequestFinished.removeListener(handleRequest);
  });

  async function handleRequest(request: DevtoolsNetworkRequest) {
    let body: any = {};
    try {
      // @ts-ignore
      body = JSON.parse(JSON.parse(request?.request?.postData?.text || '{}'));
    } catch (err) {
      return;
    }
    // @ts-ignore
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
    const bodyString = await new Promise<string>(resolve => {
      request.getContent((content: string, _encoding: string) => {
        return resolve(content);
      });
    });
    const responseBody = JSON.parse(bodyString);
    setRequests([
      {
        requestData: JSON.stringify(data),
        routingKey,
        status:
          JSON.parse(responseBody?.data?.forms?.[0])?.status ||
          // @ts-ignore
          request.response.status,
        // @ts-ignore
        url: request.request.url,
        responseData: JSON.parse(responseBody?.data?.forms?.[0])?.data
      },
      ...requests
    ]);
  }
  return requests;
}
