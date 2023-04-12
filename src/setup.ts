import { expect } from 'vitest';
import matchers from '@testing-library/jest-dom/matchers';
import server from './mock/testServer';

expect.extend(matchers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
