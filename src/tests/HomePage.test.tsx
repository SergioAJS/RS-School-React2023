import { rest } from 'msw';
import { MemoryRouter } from 'react-router-dom';

import { fireEvent, screen } from '@testing-library/react';

import { App } from '../App';
import server from '../mock/testServer';
import { renderWithProviders } from '../utils/testUtils';

describe('Home page', () => {
  it('fetches & receives name Rick Sanchez after clicking the search user button', async () => {
    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      'You can search by the character name'
    );
    const searchButton = screen.getByRole('button');

    expect(searchButton).toHaveValue('Search');
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute('type', 'search');

    fireEvent.input(searchInput, { target: { value: 'rick' } });
    expect(searchInput).toHaveValue('rick');

    fireEvent.click(screen.getByRole('button'));

    await screen.findByText(/Rick Sanchez/i);
  });

  it('handles error response', async () => {
    server.use(
      rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    renderWithProviders(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    await screen.findByText(/Name does not exist/i);
  });
});
