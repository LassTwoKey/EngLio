import { RootState } from "../../store";

export const getFilters = (state: RootState) => {
  return state.filters;
};
