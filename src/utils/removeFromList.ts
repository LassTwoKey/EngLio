export const removeFromList = (id: number | string, list: any) => {
  const existingItems = list.filter((item: any) => !(item.id === id));

  return existingItems;
};
