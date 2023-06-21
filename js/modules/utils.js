export const parsingNestedObject = (obj) => {
  const valArr = [];
  const nestedValues = Object.values(obj);
  for (const val of nestedValues) {
    valArr.push(val);
  }

  return valArr;
};

export const addNewGoodArr = (good, arr) => {
  arr.push(good);
};
