import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import charactersApiReducer, { charactersApi } from './API/charactersApi';
import characterCardsReducer from './slices/characterCardsSlice';
import formPageReducer from './slices/formPageSlice';
import searchCharacterReducer from './slices/searchCharacterSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  [charactersApi.reducerPath]: charactersApiReducer,
  searchCharacter: searchCharacterReducer,
  formPage: formPageReducer,
  characterCards: characterCardsReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
