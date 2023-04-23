import * as toolkitRaw from '@reduxjs/toolkit';

import { IFormCardData } from '../../models/IFormCardData';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { createSlice } = ((toolkitRaw as TypeToolkitRaw).default ?? toolkitRaw) as typeof toolkitRaw;

import type { PayloadAction } from '@reduxjs/toolkit';

interface IFormPage {
  formCards: IFormCardData[];
}

export const initialState: IFormPage = {
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
