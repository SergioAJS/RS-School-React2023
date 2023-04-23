import { expect } from 'vitest';

import matchers from '@testing-library/jest-dom/matchers';

import server from './mock/testServer';
import { charactersApi, setupStoreRTKQuery } from './redux';

const store = setupStoreRTKQuery({});

expect.extend(matchers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => {
  server.resetHandlers();
  store.dispatch(charactersApi.util.resetApiState());
});
afterAll(() => server.close());
