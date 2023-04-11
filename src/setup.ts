import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import server from './mock/testServer';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

expect.extend(matchers);
