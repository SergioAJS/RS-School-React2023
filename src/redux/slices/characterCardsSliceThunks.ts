import { createSlice } from '@reduxjs/toolkit';

import { ICharacterCards } from '../../models/ICharacterApiThunks';
import { fetchCharacter, fetchCharacters } from '../API/charactersApiThunks';

const initialState: ICharacterCards = {
  characterCards: [],
  isLoadingChars: false,
  errorChars: '',
  character: null,
  isLoadingChar: false,
};

export const characterCardsApiSlice = createSlice({
  name: 'characterCardsApi',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoadingChars = true;
        state.errorChars = '';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.characterCards = action.payload;
        state.isLoadingChars = false;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.isLoadingChars = false;
        state.errorChars = action.payload;
      })
      .addCase(fetchCharacter.pending, (state) => {
        state.isLoadingChar = true;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.character = action.payload;
        state.isLoadingChar = false;
      })
      .addCase(fetchCharacter.rejected, (state) => {
        state.isLoadingChar = false;
      });
  },
});

export default characterCardsApiSlice.reducer;
