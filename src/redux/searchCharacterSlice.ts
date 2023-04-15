import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  searchValue: string;
  inputValue: string;
}

const initialState: InitialState = {
  searchValue: '',
  inputValue: '',
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
  },
});

export const { setSearchValue, setInputValue } = searchCharacterSlice.actions;

export default searchCharacterSlice.reducer;
