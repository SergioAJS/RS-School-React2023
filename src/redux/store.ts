import { configureStore } from '@reduxjs/toolkit';
import { charactersApi } from './charactersApi';
// import todoReducer from './todoSlice';

export const store = configureStore({
  reducer: {
    // todos: todoReducer,
    [charactersApi.reducerPath]: charactersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(charactersApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {todos: TodosState}
export type AppDispatch = typeof store.dispatch;
