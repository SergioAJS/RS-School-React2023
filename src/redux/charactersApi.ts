import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICharacters } from '../models/ICharacters';
import { ICharacter } from '../models/ICharacter';

type CharactersResponse = ICharacters;
type CharacterResponse = ICharacter;

export const charactersApi = createApi({
  reducerPath: 'charactersApi',
  tagTypes: ['Characters', 'Character'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api',
  }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersResponse, string>({
      query: (name = '') => `/character${name && `/?name=${name}`}`,
      providesTags: (result) =>
        result
          ? [
              ...result.results.map(({ id }) => ({ type: 'Characters' as const, id })),
              { type: 'Characters', id: 'LIST' },
            ]
          : [{ type: 'Characters', id: 'LIST' }],
    }),
    getCharacterById: builder.query<CharacterResponse, number>({
      query: (id) => `/character${id && `/${id}`}`,
      // providesTags: (result) =>
      // result
      //   ? [
      //       ...result.map(({ id }) => ({ type: 'Characters' as const, id })),
      //       { type: 'Characters', id: 'LIST' },
      //     ]
      //   : [{ type: 'Characters', id: 'LIST' }],
    }),

    // addProduct: build.mutation({
    //   query: (body) => ({
    //     url: 'goods',
    //     method: 'POST',
    //     body,
    //   }),
    //   invalidatesTags: [{ type: 'Characters', id: 'LIST' }],
    // }),
    // deleteProduct: build.mutation({
    //   query: (id) => ({
    //     url: `goods/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: [{ type: 'Characters', id: 'LIST' }],
    // }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = charactersApi;
