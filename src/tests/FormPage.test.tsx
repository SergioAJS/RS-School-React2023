import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';

import { App } from '../App';
import { renderWithProviders } from '../utils/testUtils';

describe('Form page', () => {
  it('Renders Form page', () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/Form']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  });
});
