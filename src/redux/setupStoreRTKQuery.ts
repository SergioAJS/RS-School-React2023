import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import charactersApiReducer, { charactersApi } from './API/charactersApiRTKQuery';
import characterCardsReducer from './slices/characterCardsSliceRTKQuery';
import formPageReducer from './slices/formPageSlice';
import searchCharacterReducer from './slices/searchCharacterSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  [charactersApi.reducerPath]: charactersApiReducer,
  searchCharacter: searchCharacterReducer,
  formPage: formPageReducer,
  characterCards: characterCardsReducer,
});

export const setupStoreRTKQuery = (preloadedState?: PreloadedState<RootStateRTKQuery>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
    preloadedState,
  });
};

export type RootStateRTKQuery = ReturnType<typeof rootReducer>;
export type AppStoreRTKQuery = ReturnType<typeof setupStoreRTKQuery>;
export type AppDispatchRTKQuery = AppStoreRTKQuery['dispatch'];
