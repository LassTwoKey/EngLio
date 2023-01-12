import { data } from "../mock/favorites";

export const addToCategory = (categoryItem: any, category: any) => {
  const findedItem = data[category].list.find(
    (item: any) => item.id === categoryItem.id
  );
  if (typeof findedItem !== "undefined") return;

  data[category].list.unshift({
    id: categoryItem.id,
    text: categoryItem.text,
    transcription: categoryItem.transcription,
    translate: categoryItem.translate
  });
};
