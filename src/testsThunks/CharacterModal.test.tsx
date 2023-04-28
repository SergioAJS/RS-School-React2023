import { rest } from 'msw';
import { MemoryRouter } from 'react-router-dom';

import { fireEvent, screen } from '@testing-library/react';

import { App } from '../App';
import { testCharacter } from '../mock/handlers';
import server from '../mock/testServer';
import { renderWithProvidersThunks } from '../utils/TestUtilsThunks';

describe('Open card modal and close on click', () => {
  it('Renders card modal and then close by user click', async () => {
    renderWithProvidersThunks(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const searchInput: HTMLInputElement = screen.getByPlaceholderText(
      'You can search by the character name'
    );
    const searchButton = screen.getByRole('button');

    fireEvent.input(searchInput, { target: { value: 'rick' } });
    expect(searchInput).toHaveValue('rick');

    fireEvent.click(searchButton);
    await screen.findByText(/Rick Sanchez/i);

    fireEvent.click(screen.getByAltText(/Rick Sanchez/i));

    server.use(
      rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(testCharacter), ctx.delay(50));
      })
    );

    await screen.findByText(/Status/i);

    const closeModalCross = screen.getByAltText(/close/i);
    fireEvent.click(closeModalCross);

    expect(closeModalCross).not.toBeInTheDocument();
  });
});
