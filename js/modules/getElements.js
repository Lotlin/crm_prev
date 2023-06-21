export const goods = document.querySelector('.goods');
export const addGoodModal = document.querySelector('.add-good');
export const goodTotalPrice =
  addGoodModal.querySelector('.add-good__total-num');
export const addBtn = goods.querySelector('.goods__add-good-button');
export const closeAddGoodModal =
  addGoodModal.querySelector('.add-good__close-button');
export const mainTable = goods.querySelector('.goods__table');
export const form = addGoodModal.querySelector('.add-good__form');
export const {
  discountCheckbox,
  discountInput,
  price: priceInput,
  amount: amountInput,
} = form;
export const elTotalPrice = goods.querySelector('.goods__total-num');


export const getElementsGoodsPrices = () => {
  const elementsGoodsPrices =
  mainTable.querySelectorAll('.goods__table-total');

  return elementsGoodsPrices;
};
