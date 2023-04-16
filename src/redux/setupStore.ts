import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { charactersApi } from './API/charactersApi';
import charactersApiReducer from './API/charactersApi';
import characterCardsReducer from './slices/characterCardsSlice';
import formCardDataReducer from './slices/formCardDataSlice';
import formPageReducer from './slices/formPageSlice';
import searchCharacterReducer from './slices/searchCharacterSlice';

// export const store = configureStore({
//   reducer: {
//     [charactersApi.reducerPath]: charactersApiReducer,
//     searchCharacter: searchCharacterReducer,
//     formPage: formPageReducer,
//     formCard: formCardDataReducer,
//     characterCards: characterCardsReducer,
//   },
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
// });

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  [charactersApi.reducerPath]: charactersApiReducer,
  searchCharacter: searchCharacterReducer,
  formPage: formPageReducer,
  formCard: formCardDataReducer,
  characterCards: characterCardsReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
    preloadedState,
  });
};

// export type RootState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
