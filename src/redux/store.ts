import { combineReducers, configureStore } from "@reduxjs/toolkit";

import welcomeApi from "../lib/welcomeApi";
import categoriesApi from "../lib/categoriesApi";
import flashCardApi from "../lib/flashcardApi";
import favoritesApi from "../lib/favoritesApi";
import notificationApi from "../lib/notificationApi";
import sectionApi from "../lib/sectionApi";

import globalSlice from "./modules/global/slice";
import filtersSlice from "./modules/filters/slice";

const reducers = {
  global: globalSlice,
  filters: filtersSlice,
  [welcomeApi.reducerPath]: welcomeApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [flashCardApi.reducerPath]: flashCardApi.reducer,
  [favoritesApi.reducerPath]: favoritesApi.reducer,
  [notificationApi.reducerPath]: notificationApi.reducer,
  [sectionApi.reducerPath]: sectionApi.reducer
};

const rootReducer = combineReducers({
  ...reducers
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      welcomeApi.middleware,
      categoriesApi.middleware,
      flashCardApi.middleware,
      favoritesApi.middleware,
      notificationApi.middleware,
      sectionApi.middleware
    )
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
