import { Provider } from 'react-redux';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CharacterCard } from '../components/CharacterCard/CharacterCard';
import { Gender } from '../models/Gender';
import { ICharacter } from '../models/ICharacter';
import { Status } from '../models/Status';
import { store } from '../redux';

const testCharacter: ICharacter = {
  id: 1,
  name: 'Rick Sanchez',
  status: Status.Alive,
  species: 'Human',
  type: '',
  gender: Gender.Male,
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
const mockCardClick = vi.fn();

describe('CharacterCard component', () => {
  it('Renders CharacterCard', () => {
    render(
      <Provider store={store}>
        <CharacterCard character={testCharacter} onOpen={mockCardClick} />
      </Provider>
    );
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Rick Sanchez');
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(/Gender/i)).toHaveTextContent('Gender: Male');
  });
});
