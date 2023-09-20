export const goods = document.querySelector('.goods');
export const addGoodModal = document.querySelector('.add-good1');
/* export const goodTotalPrice =
  addGoodModal.querySelector('.add-good__total-num'); */
export const addBtn = goods.querySelector('.goods__add-good-button');
/* export const closeAddGoodModal =
  addGoodModal.querySelector('.add-good__close-button'); */
export const mainTable = goods.querySelector('.goods__table');
// export const form = addGoodModal.querySelector('.add-good__form');
/*
export const {
  discountCheckbox,
  discountInput,
  price: priceInput,
  amount: amountInput,
} = form;
*/
export const elTotalPrice = goods.querySelector('.goods__total-num');

export const errModal = document.querySelector('.error');
export const errTitle = errModal.querySelector('.error__title');
export const errCloseButton = errModal.querySelector('.error__close-button');

/*
export const getElementsGoodsPrices = () => {
  const elementsGoodsPrices =
  mainTable.querySelectorAll('.goods__table-total');

  return elementsGoodsPrices;
};
*/

export const getModalElements = () => {
  const overlay = document.querySelector('.overlay');
  const id = overlay.querySelector('.add-good-id');
  const closeButton = overlay.querySelector('.add-good__close-button');
  const form = overlay.querySelector('.add-good__form');
  const title = overlay.querySelector('[name=title]');
  const category = overlay.querySelector('[name=category]');
  const units = overlay.querySelector('[name=units]');
  const discountCheckbox =
    overlay.querySelector('.form__discount-checkbox-input');
  const discount = overlay.querySelector('[name=discountInput]');
  const description = overlay.querySelector('[name=description]');
  const count = overlay.querySelector('[name=amount]');
  const price = overlay.querySelector('[name=price]');
  const totalPrice = overlay.querySelector('.add-good__total-num');

  return {
    overlay,
    id,
    closeButton,
    form,
    title,
    category,
    units,
    discountCheckbox,
    discount,
    description,
    count,
    price,
    totalPrice,
  };
};
