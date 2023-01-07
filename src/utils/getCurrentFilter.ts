import { FILTER_ACTIONS } from "../data/constants";
import {
  filterByOrder,
  filterByMixed,
  filterByReverse,
  filterByMemorize,
  filterByFailure
} from "./filters";

export const getCurrentFilter = (value: string) => {
  switch (value) {
    case FILTER_ACTIONS.byOrder:
      return filterByOrder;
    case FILTER_ACTIONS.byMixed:
      return filterByMixed;
    case FILTER_ACTIONS.byReverse:
      return filterByReverse;
    case FILTER_ACTIONS.byMemorize:
      return filterByMemorize;
    case FILTER_ACTIONS.byFailure:
      return filterByFailure;
    default:
      return () => {
        console.log("current filter function does not exist");
      };
  }
};
