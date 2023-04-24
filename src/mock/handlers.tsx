import { fetch, Headers, Request, Response } from 'cross-fetch';
import { rest } from 'msw';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

const url = 'https://rickandmortyapi.com/api/character';

export const testCharacters = {
  info: {
    count: 107,
    pages: 6,
    next: 'https://rickandmortyapi.com/api/character/?page=2&name=Rick',
    prev: null,
  },
  results: [
    {
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
    },
    {
      id: 8,
      name: 'Adjudicator Rick',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/28'],
      url: 'https://rickandmortyapi.com/api/character/8',
      created: '2017-11-04T20:03:34.737Z',
    },
    {
      id: 15,
      name: 'Alien Rick',
      status: 'unknown',
      species: 'Alien',
      type: '',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/10'],
      url: 'https://rickandmortyapi.com/api/character/15',
      created: '2017-11-04T20:56:13.215Z',
    },
    {
      id: 19,
      name: 'Antenna Rick',
      status: 'unknown',
      species: 'Human',
      type: 'Human with antennae',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'unknown',
        url: '',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/10'],
      url: 'https://rickandmortyapi.com/api/character/19',
      created: '2017-11-04T22:28:13.756Z',
    },
  ],
};

export const testCharacter = {
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

export const handlers = [
  rest.get(url, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(testCharacters), ctx.delay(50));
  }),
];
