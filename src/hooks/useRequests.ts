import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { RequestRow } from '../types';

export default function useRequests(): RequestRow[] {
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    chrome.devtools.network.onRequestFinished.addListener(handleRequest);
    return () =>
      chrome.devtools.network.onRequestFinished.removeListener(handleRequest);
  });

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
        requestData: JSON.stringify(data),
        routingKey,
        status: request.response.status,
        url: request.request.url
      },
      ...requests
    ]);
  }

  return requests;
}
