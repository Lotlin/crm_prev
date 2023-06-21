import {
  priceInput,
  amountInput,
  discountInput,
  getElementsGoodsPrices,
  form, goodTotalPrice,
  mainTable,
  elTotalPrice,
} from './getElements.js';
import {goodsArr} from './data.js';

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
      const idDeleted = target.closest('.good').childNodes[0].innerText;
      for (let i = 0; i < goodsArr.length; i++) {
        if (String(goodsArr[i].id) === idDeleted) {
          goodsArr.splice(i, 1);
        }
      }
      showAllGoodsTotalPrice();
      console.log(goodsArr);
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
  const amount = newGoodData.amount;
  const fullPrice = newGoodData.price;
  const discountSize =
    getDiscountSize(fullPrice, newGoodData.discountInput);
  const price = getDiscountedPrice(fullPrice, discountSize);
  const total = getTotalPrice(price, amount);
  const images = newGoodData.images;
  const newGood = {
    id, title, category, units, amount, price, total, images,
  };

  return newGood;
};
