import { rest } from 'msw';
import { MemoryRouter } from 'react-router-dom';

import { fireEvent, screen } from '@testing-library/react';

import { App } from '../App';
import server from '../mock/testServer';
import { renderWithProvidersThunks } from '../utils/TestUtilsThunks';

describe('Home page', () => {
  it('fetches & receives name Rick Sanchez after clicking the search user button', async () => {
    renderWithProvidersThunks(
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

    fireEvent.click(searchButton);

    await screen.findByText(/Rick Sanchez/i);
  });

  it('Show message for user if character name does not exist', async () => {
    server.use(
      rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        return res(ctx.status(404));
      })
    );

    renderWithProvidersThunks(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      'You can search by the character name'
    );
    const searchButton = screen.getByRole('button');

    fireEvent.input(searchInput, { target: { value: 'rick-chick' } });
    expect(searchInput).toHaveValue('rick-chick');

    fireEvent.click(searchButton);

    await screen.findByText(/Name does not exist/i);
  });
});
