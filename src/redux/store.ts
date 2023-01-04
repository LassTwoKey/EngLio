import { combineReducers, configureStore } from "@reduxjs/toolkit";
import globalSlice from "./modules/globalState/slice";

export const store = configureStore({
  reducer: combineReducers({
    global: globalSlice
  })
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
