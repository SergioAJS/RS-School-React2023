import { PreloadedState } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit/dist/index';

import characterCardsSlice from './slices/characterCardsSliceThunks';
import formPageReducer from './slices/formPageSlice';
import searchCharacterReducer from './slices/searchCharacterSlice';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { configureStore, combineReducers } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;

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
