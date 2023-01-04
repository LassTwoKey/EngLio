import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface GlobalState {
  burgerMenuToggle: boolean;
  loader: boolean;
  header: {
    menuList: { path: string; value: string }[];
    input: {
      search: { placeholder: string; result: string; errorMessage: string };
    };
  };
}

const initialState: GlobalState = {
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
    input: {
      search: {
        placeholder: "Поиск",
        result: "Результаты поиска:",
        errorMessage: "Произошла ошибка поиска"
      }
    }
  }
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
    }
  }
});

// Action creators are generated for each case reducer function
export const { toggleLoader, setBurgerMenuToggle } = globalSlice.actions;

export default globalSlice.reducer;
