import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  searchValue: string;
  inputValue: string;
  characterId: number | null;
}

const initialState: InitialState = {
  searchValue: '',
  inputValue: '',
  characterId: null,
};

export const searchCharacterSlice = createSlice({
  name: 'searchCharacter',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setCharacterId: (state, action: PayloadAction<number | null>) => {
      state.characterId = action.payload;
    },
  },
});

export const { setSearchValue, setInputValue, setCharacterId } = searchCharacterSlice.actions;

export default searchCharacterSlice.reducer;
