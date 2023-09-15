import {
  priceInput,
  amountInput,
  discountInput,
  getElementsGoodsPrices,
  form, goodTotalPrice,
  mainTable,
  elTotalPrice,
  errTitle,
} from './getElements.js';

import {errModalOpen} from './control.js';
// import {goodsArr} from './data.js';

const getDiscountSize = (fullPrice, discount) =>
  Number(fullPrice) * Number(discount) * 0.01;

const getDiscountedPrice = (fullPrice, discountSize) =>
  Number(fullPrice) - discountSize;

const getTotalPrice = (price, amount) => price * Number(amount);

export const showAllGoodsTotalPrice = () => {
  let totalPrice = 0;
  const elementsGoodsPrices = getElementsGoodsPrices();
  elementsGoodsPrices.forEach(element => {
    totalPrice += Number(element.textContent);
  });

  elTotalPrice.textContent = `${totalPrice} руб.`;
};

export const delGood = () => {
  mainTable.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.goods__del')) {
      target.closest('.good').remove();
      /*
      const idDeleted = target.closest('.good').childNodes[0].innerText;
      for (let i = 0; i < goodsArr.length; i++) {
        if (String(goodsArr[i].id) === idDeleted) {
          goodsArr.splice(i, 1);
        }
      }
      showAllGoodsTotalPrice();
      console.log(goodsArr);
      */
    }
  });
};

export const showNewGoodTotalPrice = () => {
  const watchedElements = [
    priceInput.name,
    amountInput.name,
    discountInput.name,
  ];

  form.addEventListener('change', e => {
    if (watchedElements.includes(e.target.name)) {
      const discountSize =
        getDiscountSize(priceInput.value, discountInput.value);
      const discountedPrice =
        getDiscountedPrice(priceInput.value, discountSize);
      const totalPrice =
        getTotalPrice(discountedPrice, amountInput.value);
      goodTotalPrice.textContent = `${totalPrice} руб`;
    }
  });
};

export const createNewGood = (newGoodData) => {
  const id = Date.parse(new Date());
  const title = newGoodData.title;
  const category = newGoodData.category;
  const units = newGoodData.units;
  const count = newGoodData.amount;
  const fullPrice = newGoodData.price;
  const discountSize =
    getDiscountSize(fullPrice, newGoodData.discountInput);
  const price = getDiscountedPrice(fullPrice, discountSize);
  const description = newGoodData.description;
  // total пока не выводится (изменена форма)
  // const total = getTotalPrice(price, count);
  const images = newGoodData.images;
  const newGood = {
    id, title, price, description, category, discountSize, count, units, images,
  };

  return newGood;
};

const showError = (err, data) => {
  console.warn(err, data);
  errModalOpen();
  errTitle.textContent = `Ошибка ${err} ${data}`;
};

export const httpRequest = (url, {
  method = 'GET',
  callback,
  body = {},
  headers,
}) => {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    if (headers) {
      for (const [key, value] of Object.entries(headers)) {
        xhr.setRequestHeader(key, value);
      }
    }

    xhr.addEventListener('load', () => {
      if (xhr.status < 200 || xhr.status >= 300) {
        showError(new Error(xhr.status), xhr.response);
        return;
      }
      // из url получаем объект, в котором нужно только свойство goods
      const data = JSON.parse(xhr.response).goods;

      if (callback) callback(data);
    });

    xhr.addEventListener('error', () => {
      showError(new Error(xhr.status), xhr.response);
      return;
    });

    xhr.send(JSON.stringify(body));
  } catch (err) {
    showError(new Error(err));
  }
};


