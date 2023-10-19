import {
  // priceInput,
  // amountInput,
  // discountInput,
  // getElementsGoodsPrices,
  // form,
  // goodTotalPrice,
  mainTable,
  // elTotalPrice,
  errTitle,
  getModalElements,
} from './getElements.js';

import {errModalOpen} from './control.js';

const getDiscountSize = (fullPrice, discount) =>
  Number(fullPrice) * Number(discount) * 0.01;

const getDiscountedPrice = (fullPrice, discountSize) =>
  Number(fullPrice) - discountSize;

// const getTotalPrice = (price, amount) => price * Number(amount);

export const showAllGoodsTotalPrice = async () => {
  /* let totalPrice = 0;

  elTotalPrice.textContent = `${totalPrice} руб.`; */
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
  const priceInput = getModalElements().price;
  const amountInput = getModalElements().count;
  const discountInput = getModalElements().discount;
  const form = getModalElements().form;

  const watchedElements = [
    priceInput.name,
    amountInput.name,
    discountInput.name,
  ];

  form.addEventListener('change', e => {
    if (watchedElements.includes(e.target.name)) {
      /*
      const discountSize =
        getDiscountSize(priceInput.value, discountInput.value);
      const discountedPrice =
        getDiscountedPrice(priceInput.value, discountSize);
      const totalPrice =
        getTotalPrice(discountedPrice, amountInput.value);
        goodTotalPrice.textContent = `${totalPrice} руб`;
      */
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
  let price = NaN;
  // discountSize пока не выводится (изменена форма)
  if (newGoodData.discountInput) {
    const discountSize =
    getDiscountSize(fullPrice, newGoodData.discountInput);
    price = getDiscountedPrice(fullPrice, discountSize);
  } else {
    price = fullPrice;
  }
  const description = newGoodData.description;
  // total пока не выводится (изменена форма)
  // const total = getTotalPrice(price, count);
  const image = newGoodData.images;
  const newGood = {
    id, title, price, description, category, count, units, image,
  };

  return newGood;
};


const showError = (err = '', data = '') => {
  if (!err && !data) {
    errModalOpen();
    errTitle.textContent = `Что-то пошло не так...`;
    return;
  }
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
    const loadElementsPromise = new Promise((resolve) => {
      xhr.addEventListener('load', () => {
        if (xhr.status < 200 || xhr.status >= 300) {
          showError(new Error(xhr.status), xhr.response);
          return;
        }
        // из url получаем объект, в котором нужно только свойство goods
        const data = JSON.parse(xhr.response).goods;

        if (callback) callback(data);
        resolve();
      });
    });

    xhr.addEventListener('error', () => {
      if (xhr.status === 422 || xhr.status === 404 ||
        (xhr.status > 499 && xhr.status < 501)) {
        showError(new Error(xhr.status), xhr.response);
      } else {
        showError();
      }
      return;
    });

    xhr.send(JSON.stringify(body));
    loadElementsPromise;
  } catch (err) {
    showError(new Error(err));
  }
};

export const fetchRequest = async (url, {
  method = 'GET',
  callback,
  body,
  headers,
}) => {
  try {
    const options = {
      method,
    };

    if (body) options.body = JSON.stringify(body);

    if (headers) options.headers = headers;

    const response = await fetch(url, options);

    if (response.ok) {
      const data = await response.json();
      if (callback) callback(data);
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    callback(new Error(err));
  }
};
