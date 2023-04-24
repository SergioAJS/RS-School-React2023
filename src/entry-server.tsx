import { response, Response } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import { App } from './App';
import { setupStoreThunks } from './redux';
import { fetchCharacters } from './redux/API/charactersApiThunks';
import { RenderFullPage } from './RenderFullPage';

export async function handleRender(url: string, res: Response) {
  let didError = false;
  const store = setupStoreThunks();

  await store.dispatch(fetchCharacters(''));

  const preloadedState = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

  const { pipe, abort } = ReactDOMServer.renderToPipeableStream(
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
        response.statusCode = didError ? 500 : 200;
        pipe(res);
      },
      onShellError() {
        response.statusCode = 500;
        response.setHeader('content-type', 'text/html');
        response.send('<h1>Something went wrong</h1>');
      },
      onError(error) {
        didError = true;
        const err = error as Error;
        console.error(err);
      },
    }
  );

  setTimeout(() => {
    abort();
  }, 10000);
}
