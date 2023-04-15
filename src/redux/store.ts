import { configureStore } from '@reduxjs/toolkit';
import { charactersApi } from './API/charactersApi';
import searchCharacterSlice from './searchCharacterSlice';

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    searchCharacter: searchCharacterSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
