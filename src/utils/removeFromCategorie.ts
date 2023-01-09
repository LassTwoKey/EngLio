import { data } from "../mock/favorites";
import { CategoryType } from "../types/Category";

export const removeFromCategorie = (
  id: number,
  category: CategoryType | string
) => {
  const existingItems = data[category].list.filter(item => !(item.id === id));

  data[category].list = [...existingItems];
};
