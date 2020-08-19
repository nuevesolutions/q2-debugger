/**
 * Copyright 2020 Nueve Solutions LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import queryString from 'query-string';
import { useEffect, useState } from 'react';
import requestsMock from '../mocks/requests';
import useEnvironment from './useEnvironment';
import { DevtoolsNetworkRequest } from '../types';

export function tmp() {
  return [] as any[];
}

export default function useRequests(): any {
  const environment = useEnvironment();
  const [requests, setRequests] = useState<any[]>([]);

  const clear = () => {
    setRequests([]);
  };

  if (environment === 'tab') return [requestsMock.reverse(), clear];

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
    const bodyString = await new Promise<string>((resolve) => {
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

  return [requests.reverse(), clear];
}
