import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';

import { App } from '../App';
import { renderWithProviders } from '../utils/TestUtils';

describe('App', () => {
  it('Renders not found if invalid path', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/this-route-does-not-exist']}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
