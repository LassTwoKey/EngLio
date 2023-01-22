import { ICard } from "../types/Card";

export const filterByOrder = (list: ICard[], length: number) => {
  return list.slice(0, length);
};

export const filterByMixed = (list: ICard[], length: number) => {
  const mixedArray = [];

  for (let i = 0; i <= length; i++) {
    const randomItem = list[Math.floor(Math.random() * list.length)];
    mixedArray.push(randomItem);
  }
  return mixedArray;
};

export const filterByReverse = (list: ICard[], length: number) => {
  return list.reverse().slice(0, length);
};

export const filterByMemorize = (list: ICard[]) => {
  return list;
};

export const filterByFailure = (list: ICard[]) => {
  return list;
};

export const wordCategoryFilter = (list: ICard[], min: number, max: number) => {
  return list.filter(item => +item.id >= min && +item.id <= max);
};
