import { rest } from 'msw';
import { Gender } from '../models/Gender';
import { Status } from '../models/Status';

const url = 'https://rickandmortyapi.com/api/character';

export const testCharacter = {
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

export const handlers = [
  rest.get(url, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json([testCharacter]));
  }),
];
