import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharacter } from '../../models/ICharacter';
import { ICharacters } from '../../models/ICharacters';

type CharactersResponse = ICharacters;
type CharacterResponse = ICharacter;

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  tagTypes: ['Characters', 'Character'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponse, string | null>({
      query: (name = '') => `/character${name && `/?name=${name}`}`,
      providesTags: (result) =>
        result
          ? [
              ...result.results.map(({ id }) => ({ type: 'Characters' as const, id })),
              { type: 'Characters', id: 'LIST' },
            ]
          : [{ type: 'Characters', id: 'LIST' }],
    }),
    getCharacterById: builder.query<CharacterResponse, number | null>({
      query: (id) => `/character${id && `/${id}`}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = charactersApi;

export default charactersApi.reducer;
