import { rest } from 'msw';
import { MemoryRouter } from 'react-router-dom';

import { fireEvent, screen } from '@testing-library/react';

import { App } from '../App';
import server from '../mock/testServer';
import { renderWithProvidersThunks } from '../utils/TestUtilsThunks';

const testCharacter = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
    'https://rickandmortyapi.com/api/episode/3',
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

describe('Cards component', () => {
  it('Render cards', async () => {
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
  });
});
