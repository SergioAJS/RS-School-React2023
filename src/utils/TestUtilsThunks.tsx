import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';

import { setupStoreThunks } from '../redux/setupStoreThunks';

import type { RenderOptions } from '@testing-library/react';
import type { PreloadedState } from '@reduxjs/toolkit';
import type { AppStoreThunks, RootStateThunks } from '../redux/setupStoreThunks';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootStateThunks>;
  store?: AppStoreThunks;
}

export function renderWithProvidersThunks(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStoreThunks(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
