import { createSlice } from "@reduxjs/toolkit";
import { FILTER_ACTIONS } from "../../../data/constants";

interface IFiltersList {
  action: string;
  value: string;
}

interface IFiltersState {
  items: IFiltersList[];
}

const initialState: IFiltersState = {
  items: [
    {
      action: FILTER_ACTIONS.byOrder,
      value: "По порядку"
    },
    {
      action: FILTER_ACTIONS.byMixed,
      value: "Смешанные"
    },
    {
      action: FILTER_ACTIONS.byReverse,
      value: "Задом наперед"
    },
    {
      action: FILTER_ACTIONS.byMemorize,
      value: "Выученные"
    },
    {
      action: FILTER_ACTIONS.byFailure,
      value: "Сложные"
    }
  ]
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {}
});

export default filtersSlice.reducer;
