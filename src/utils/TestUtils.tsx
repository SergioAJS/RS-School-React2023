import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import type { AppStore, RootState } from '../redux/setupStore';
// As a basic setup, import your same slice reducers
// import userReducer from '../features/users/userSlice';
import { charactersApi } from '../redux';
import searchCharacterSlice from '../redux/slices/searchCharacterSlice';
import formPageSlice from '../redux/slices/formPageSlice';
import formCardDataSlice from '../redux/slices/formCardDataSlice';
import characterCardsSlice from '../redux/slices/characterCardsSlice';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        [charactersApi.reducerPath]: charactersApi.reducer,
        searchCharacter: searchCharacterSlice,
        formPage: formPageSlice,
        formCard: formCardDataSlice,
        characterCards: characterCardsSlice,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
      preloadedState,
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
