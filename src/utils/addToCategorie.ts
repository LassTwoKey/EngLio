import { data } from "../mock/favorites";
import { ICategoryItem, CategoryType } from "../types/Category";

export const addToCategory = (
  categoryItem: ICategoryItem,
  category: CategoryType | string
) => {
  const findedItem = data[category].list.find(
    item => item.id === categoryItem.id
  );
  if (typeof findedItem !== "undefined") return;

  data[category].list.unshift({
    id: categoryItem.id,
    text: categoryItem.text,
    transcription: categoryItem.transcription,
    translate: categoryItem.translate
  });
};
