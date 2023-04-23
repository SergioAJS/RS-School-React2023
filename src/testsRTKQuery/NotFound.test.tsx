import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';

import { App } from '../App';
import { renderWithProvidersRTKQuery } from '../utils/TestUtilsRTKQuery';

describe('App', () => {
  it('Renders not found if invalid path', () => {
    renderWithProvidersRTKQuery(
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
