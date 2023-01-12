import { ICard } from "../types/Card";
import { COUNT_LIMIT } from "../data/constants";

export const filterByOrder = (list: ICard[]) => {
  return list.slice(0, COUNT_LIMIT);
};

export const filterByMixed = (list: ICard[]) => {
  const mixedArray = [];

  for (let i = 0; i < COUNT_LIMIT; i++) {
    const randomItem = list[Math.floor(Math.random() * list.length)];
    mixedArray.push(randomItem);
  }
  console.log(mixedArray);
  return mixedArray;
};

export const filterByReverse = (list: ICard[]) => {
  return list.reverse().slice(0, COUNT_LIMIT);
};

export const filterByMemorize = (list: ICard[]) => {
  return list;
};

export const filterByFailure = (list: ICard[]) => {
  return list;
};

// sorting array
