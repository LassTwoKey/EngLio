import { createSlice } from "@reduxjs/toolkit";
import {
  filterByOrder,
  filterByMixed,
  filterByReverse,
  filterByMemorize,
  filterByFailure
} from "../../../utils/filters";

interface IFiltersState {
  items: {
    value: string;
    func: () => void;
  }[];
}

const initialState: IFiltersState = {
  items: [
    {
      value: "По порядку",
      func: filterByOrder
    },
    {
      value: "Смешанные",
      func: filterByMixed
    },
    {
      value: "Задом наперед",
      func: filterByReverse
    },
    {
      value: "Выученные",
      func: filterByMemorize
    },
    {
      value: "Сложные",
      func: filterByFailure
    }
  ]
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {}
});

export default filtersSlice.reducer;
