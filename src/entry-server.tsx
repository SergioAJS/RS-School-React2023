import { Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import { App } from './App';
import { setupStoreThunks } from './redux';
import { fetchCharacters } from './redux/API/charactersApiThunks';
import { RenderFullPage } from './RenderFullPage';

export async function handleRender(url: string, res: Response) {
  const store = setupStoreThunks();

  await store.dispatch(fetchCharacters(''));

  const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

  const stream = ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <RenderFullPage
        html={
          <Provider store={store}>
            <StaticRouter location={url}>
              <App />
            </StaticRouter>
          </Provider>
        }
        preloadedState={preloadedState}
      />
    </React.StrictMode>,
    {
      onShellReady() {
        stream.pipe(res);
      },
      onAllReady() {
        res.end();
      },
    }
  );
}
