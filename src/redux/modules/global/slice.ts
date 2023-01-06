import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IGlobalState {
  burgerMenuToggle: boolean;
  loader: boolean;
  header: {
    menuList: { path: string; value: string }[];
    notifications: {
      title: string;
    };
  };
}

const initialState: IGlobalState = {
  burgerMenuToggle: false,
  loader: true,
  header: {
    menuList: [
      {
        path: "/welcome",
        value: "Главная"
      },
      {
        path: "/flashcards",
        value: "Карточки"
      },
      {
        path: "/favorite",
        value: "Избранное"
      }
    ],
    notifications: {
      title: "Уведомления"
    }
  }
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    toggleLoader(state, { payload }: PayloadAction<boolean>) {
      state.loader = payload;
    },
    setBurgerMenuToggle(state, { payload }: PayloadAction<boolean>) {
      state.burgerMenuToggle = payload;
    }
  }
});

export const { toggleLoader, setBurgerMenuToggle } = globalSlice.actions;

export default globalSlice.reducer;
