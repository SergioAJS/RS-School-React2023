import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import server from './mock/testServer';
import { charactersApi, setupStore } from './redux';

const store = setupStore({});

expect.extend(matchers);

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => {
  server.resetHandlers();
  store.dispatch(charactersApi.util.resetApiState());
});
afterAll(() => server.close());
