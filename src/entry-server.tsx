import React from 'react';
import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import { App } from './App';
import { setupStore } from './redux';

export function render(url: string, opts: RenderToPipeableStreamOptions) {
  const stream = ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <Provider store={setupStore()}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
  return stream;
}
