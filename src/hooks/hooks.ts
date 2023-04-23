import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type {
  RootStateRTKQuery,
  AppDispatchRTKQuery,
  RootStateThunks,
  AppDispatchThunks,
} from '../redux/index';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatchRTKQuery: () => AppDispatchRTKQuery = useDispatch;
export const useAppSelectorRTKQuery: TypedUseSelectorHook<RootStateRTKQuery> = useSelector;

export const useAppDispatchThunks: () => AppDispatchThunks = useDispatch;
export const useAppSelectorThunks: TypedUseSelectorHook<RootStateThunks> = useSelector;
