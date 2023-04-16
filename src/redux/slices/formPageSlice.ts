import { createSlice } from '@reduxjs/toolkit';

import { IFormCardData } from '../../models/IFormCardData';

import type { PayloadAction } from '@reduxjs/toolkit';

interface IFormPage {
  formCards: IFormCardData[];
}

const initialState: IFormPage = {
  formCards: [],
};

export const formPageSlice = createSlice({
  name: 'formCardData',
  initialState,
  reducers: {
    addNewCard: (state, action: PayloadAction<IFormCardData[]>) => {
      state.formCards = [...action.payload];
    },
  },
});

export const { addNewCard } = formPageSlice.actions;

export default formPageSlice.reducer;
