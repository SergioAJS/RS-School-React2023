import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';

import characterCardsSlice from './slices/characterCardsSliceThunks';
import formPageReducer from './slices/formPageSlice';
import searchCharacterReducer from './slices/searchCharacterSlice';

// Create the root reducer separately so we can extract the RootState type
export const rootReducer = combineReducers({
  searchCharacter: searchCharacterReducer,
  formPage: formPageReducer,
  characterCards: characterCardsSlice,
});

export const setupStoreThunks = (preloadedState?: PreloadedState<RootStateThunks>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: { extraArgument: null }, serializableCheck: false }),
    preloadedState,
  });
};

export type RootStateThunks = ReturnType<typeof rootReducer>;
export type AppStoreThunks = ReturnType<typeof setupStoreThunks>;
export type AppDispatchThunks = AppStoreThunks['dispatch'];
