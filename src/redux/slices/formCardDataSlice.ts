import { createSlice } from '@reduxjs/toolkit';
import { Countries } from '../../models/Countries';
import { IFormCardData } from '../../models/IFormCardData';
import { Payments } from '../../models/Payments';

import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IFormCardData = {
  firstName: '',
  deliveryDate: '',
  country: Countries.Uzbekistan,
  packageOption: [],
  payment: Payments.Card,
  imageFile: '',
};

export const formCardDataSlice = createSlice({
  name: 'formCardData',
  initialState,
  reducers: {
    setFormCardData: (state, action: PayloadAction<IFormCardData>) => {
      state = action.payload;
    },
  },
});

export const { setFormCardData } = formCardDataSlice.actions;

export default formCardDataSlice.reducer;
