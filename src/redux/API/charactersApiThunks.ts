import { createAsyncThunk } from '@reduxjs/toolkit';

import { ICharacter } from '../../models/ICharacter';

export const fetchCharacters = createAsyncThunk<ICharacter[], string, { rejectValue: string }>(
  'characterCards/fetchCharacters',
  async function (name, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character${name && `/?name=${name}`}`
      );
      if (!response.ok) {
        return rejectWithValue('Name does not exist!');
      }
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchCharacter = createAsyncThunk<ICharacter, number | null>(
  'character/fetchCharacter',
  async function (id, { rejectWithValue }) {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character${id && `/${id}`}`);
      if (!response.ok) {
        return rejectWithValue('ServerError!');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
