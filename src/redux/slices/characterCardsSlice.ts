import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import { ICharacter } from '../../models/ICharacter';

interface ICharacterCards {
  characterCards: ICharacter[];
}

const initialState: ICharacterCards = {
  characterCards: [],
};

export const characterCardsSlice = createSlice({
  name: 'characterCards',
  initialState,
  reducers: {
    setCharacterCards: (state, action: PayloadAction<ICharacter[]>) => {
      state.characterCards = action.payload;
    },
  },
});

export const { setCharacterCards } = characterCardsSlice.actions;

export default characterCardsSlice.reducer;
