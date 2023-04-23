import React from 'react';
import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import { App } from './App';
import { setupStoreThunks } from './redux';
import { fetchCharacters } from './redux/API/charactersApiThunks';

export async function render(url: string, opts: RenderToPipeableStreamOptions) {
  const store = setupStoreThunks();

  await store.dispatch(fetchCharacters(''));

  const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

  const stream = ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={url}>
          <App />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.__PRELOADED_STATE__ =${preloadedState}`,
            }}
          ></script>
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
    opts
  );
  return stream;
}
