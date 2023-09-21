export const parsingNestedObject = (obj) => {
  const valArr = [];
  const nestedValues = Object.values(obj);
  for (const val of nestedValues) {
    valArr.push(val);
  }

  return valArr;
};
/*
export const addNewGoodArr = (good, arr) => {
  arr.push(good);
};
*/
const getScreenSize = () => {
  const screenHeight = screen.height;
  const screenWidth = screen.width;

  return {
    screenHeight,
    screenWidth,
  };
};

export const getPictureWindowPosition = (pictureWidth, pictureHeigth) => {
  const top = (getScreenSize().screenHeight - pictureHeigth) / 2;
  const left = (getScreenSize().screenWidth - pictureWidth) / 2;
  const result = `top=${top}, left=${left}`;

  return result;
};

export const getGoodId = (target, parentClassName) =>
  target.closest(`.${parentClassName}`).childNodes[0].innerText;

export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();

  reader.addEventListener('loadend', () => {
    resolve(reader.result);
  });

  reader.addEventListener('error', err => {
    reject(err);
  });

  reader.readAsDataURL(file);
});
