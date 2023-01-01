import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  burgerMenuToggle: boolean;
  loader: boolean;
}

const initialState: GlobalState = {
  burgerMenuToggle: false,
  loader: true,
};

export const globalSlice = createSlice({
  name: "globalData",
  initialState,
  reducers: {
    toggleLoader(state, { payload }: PayloadAction<boolean>) {
      state.loader = payload;
    },
    setBurgerMenuToggle(state, { payload }: PayloadAction<boolean>) {
      state.burgerMenuToggle = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleLoader, setBurgerMenuToggle } = globalSlice.actions;

export default globalSlice.reducer;
