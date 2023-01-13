export const objToArr = (obj: any) => {
  const arr = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push({
        ...obj[key],
        uniqueId: key
      });
    }
  }

  return arr;
};
