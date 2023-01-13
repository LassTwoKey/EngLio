export const isFavoritedCheck = (items: any, id: string) => {
  let isActive = false;

  for (const key in items) {
    if (Object.prototype.hasOwnProperty.call(items, key)) {
      if (items[key].id === id) {
        isActive = true;
      }
    }
  }

  return isActive;
};
