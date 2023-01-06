import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalSlice from "./modules/global/slice";
import filtersSlice from "./modules/filters/slice";

const reducers = {
  global: globalSlice,
  filters: filtersSlice
};

const rootReducer = combineReducers({
  ...reducers
});

export const store = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
