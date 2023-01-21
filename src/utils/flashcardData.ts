export const isMatchData = (category: any, categoryId: string, id: string) => {
  if (category[categoryId]) {
    const findedMatching = category[categoryId].find(
      (item: any) => item.id === id
    );
    if (findedMatching) return true;
  }
  return false;
};

export const addItem = (
  addFunc: any,
  section: any,
  category: string,
  body: any
) => {
  return addFunc({
    section,
    category,
    body
  });
};

export const getData = () => {};
