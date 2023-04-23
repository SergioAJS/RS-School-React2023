import React from 'react';
import ReactDOMServer, { RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';

import { App } from './App';
import { setupStoreThunks } from './redux';
import { ICharacter } from './models/ICharacter';
import { ICharacters } from './models/ICharacters';

export async function render(url: string, opts: RenderToPipeableStreamOptions) {
  async function fetchCards() {
    try {
      const apiResponse = await fetch('https://rickandmortyapi.com/api/character');
      const response: ICharacters = await apiResponse.json();
      const cards: ICharacter[] = response.results;
      return cards;
    } catch (error) {}
  }
  const initialCards: ICharacter[] | undefined = await fetchCards().then((data) => data);
  let initCharCards;
  if (initialCards) {
    initCharCards = {
      characterCards: initialCards,
      isLoadingChars: false,
      errorChars: '',
      character: null,
      isLoadingChar: false,
    };
  }

  const preloadedState = JSON.stringify(
    setupStoreThunks({ characterCards: initCharCards }).getState()
  ).replace(/</g, '\\u003c');

  const stream = ReactDOMServer.renderToPipeableStream(
    <React.StrictMode>
      <Provider store={setupStoreThunks({ characterCards: initCharCards })}>
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
