import { createSlice } from "@reduxjs/toolkit";
import { FILTER_ACTIONS } from "../../../data/constants";

interface IFiltersList {
  action: string;
  value: string;
}

interface Ioptns {
  value: string;
  text: string;
  min: number;
  max: number;
}

interface IFiltersState {
  items: IFiltersList[];
  optns: Ioptns[];
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
  ],
  optns: [
    {
      value: "0",
      text: "1-199",
      min: 1,
      max: 199
    },
    {
      value: "1",
      text: "200-299",
      min: 200,
      max: 299
    },
    {
      value: "2",
      text: "300-399",
      min: 300,
      max: 399
    },
    {
      value: "3",
      text: "500-999",
      min: 500,
      max: 999
    }
  ]
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {}
});

export default filtersSlice.reducer;
