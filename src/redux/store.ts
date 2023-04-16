import { configureStore } from '@reduxjs/toolkit';
import { charactersApi } from './API/charactersApi';
import formCardDataSlice from './slices/formCardDataSlice';
import formPageSlice from './slices/formPageSlice';
import searchCharacterSlice from './slices/searchCharacterSlice';

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    searchCharacter: searchCharacterSlice,
    formPage: formPageSlice,
    formCard: formCardDataSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
