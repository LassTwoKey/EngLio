import { combineReducers, configureStore } from "@reduxjs/toolkit";

import welcomeApi from "../api/welcomeApi";
import categoriesApi from "../api/categoriesApi";
import flashCardApi from "../api/flashcardApi";
import favoritesApi from "../api/favoritesApi";
import notificationApi from "../api/notificationApi";
import sectionApi from "../api/sectionApi";

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
