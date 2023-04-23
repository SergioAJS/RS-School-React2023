import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';

import { App } from '../App';
import { renderWithProvidersRTKQuery } from '../utils/TestUtilsRTKQuery';

describe('About Us page', () => {
  it('Renders About Us page', () => {
    renderWithProvidersRTKQuery(
      <MemoryRouter initialEntries={['/AboutUs']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('About Us');
    expect(screen.getByRole('button')).toHaveTextContent('To Home Page');
  });
});
