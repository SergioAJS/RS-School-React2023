import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';

import { App } from '../App';
import { renderWithProviders } from '../utils/testUtils';

describe('About Us page', () => {
  it('Renders About Us page', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/AboutUs']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About Us');
    expect(screen.getByRole('button')).toHaveTextContent('To Home Page');
  });
});
