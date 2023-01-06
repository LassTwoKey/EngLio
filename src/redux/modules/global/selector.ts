import { RootState } from "../../store";

export const getGlobal = (state: RootState) => {
  return state.global;
};
