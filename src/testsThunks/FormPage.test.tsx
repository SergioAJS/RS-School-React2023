import { MemoryRouter } from 'react-router-dom';

import { screen } from '@testing-library/react';

import { App } from '../App';
import { renderWithProvidersThunks } from '../utils/TestUtilsThunks';

describe('Form page', () => {
  it('Renders Form page', () => {
    renderWithProvidersThunks(
      <MemoryRouter initialEntries={['/Form']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
  });
});
