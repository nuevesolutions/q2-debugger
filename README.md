# Q2 Debugger

> inspect tecton q2 api calls

The q2 api debugger inspects the tecton q2 api calls. It works similar to the chrome network inspector.
It shows the `routing_key` and `payload` that was sent/received to/from the extension.
![extension](https://nuevesolutions.com/wp-content/uploads/2020/10/Screenshot-from-2020-10-05-12-28-40.png)

## [Install Chrome Plugin](https://chrome.google.com/webstore/detail/q2-debugger/ofenoeokeajgginmciegemdiioglcdio)

**[Click Here](https://chrome.google.com/webstore/detail/q2-debugger/ofenoeokeajgginmciegemdiioglcdio)** to install the extension from chrome web store.

## Highlights
  - Tracks `requestExtensionData` (api calls to the Q2 backend extension)
  - Debugs q2 extension backend by tracking meta.
  - Resizable columns
	![extension](https://nuevesolutions.com/wp-content/uploads/2020/10/Screenshot-from-2020-10-05-12-34-11.png)
  - Button to **clear** the inspector, similar to the chrome network inspector
  - **Right click** to copy data from one of the cells, such as the _Routing Key_, _Request Data_ or _Response Data_
	![extension](https://nuevesolutions.com/wp-content/uploads/2020/10/Screenshot-from-2020-10-06-12-32-33-1-1.png)
  - Light and dark themes that match the chrome debugger theme
	![extension](https://nuevesolutions.com/wp-content/uploads/2020/10/Screenshot-from-2020-10-05-12-27-30.png)

## Meta

> Debug the backend of a q2 python extension using meta

Meta tracks debugging information from a q2 backend extension during an api call.

![extension](https://nuevesolutions.com/wp-content/uploads/2020/10/Screenshot-from-2020-10-05-12-30-15.png)

#### Requests

Meta can track requests that were made from a q2 extension during the q2 api call.

| key                        | value                     |
| --------                   | ------------------------- |
| `request`                  | api http request          |
| `request.url`              | api http request url      |
| `request.headers`          | api http request headers  |
| `request.body`             | api http request body     |
| `request.response`         | api http response         |
| `request.response.headers` | api http response headers |
| `request.response.body`    | api http response body    |

#### Tracebacks

Meta can track any python exceptions that were thrown during the api call.

#### Extendable

Meta supports an api for extending the data points meta tracks. You can get more information about this by contacting us on our [support page](https://nuevesolutions.com/q2-api-debugger-chrome-extension).

## FAQ
  - What type of q2 api calls are supported?
    - Currently only q2 tecton requests are supported.

## [Get Support](https://nuevesolutions.com/q2-api-debugger-chrome-extension)

[Click Here](https://nuevesolutions.com/q2-api-debugger-chrome-extension) to comment and make suggestions for the plugin.
