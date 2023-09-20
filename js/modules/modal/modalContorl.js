import loadStyle from './styleLoad.js';
import {renderAddGoodModal} from './renderModal.js';
import {getModalElements, addBtn} from '../getElements.js';

export const openModal = (editGood = false) => {
  const modal = renderAddGoodModal(editGood);
  document.body.append(modal);
};

export const closeModal = () => {
  const closeModalButton = getModalElements().closeButton;
  const overlay = getModalElements().overlay;

  closeModalButton.addEventListener('click', () => {
    overlay.remove();
  });

  overlay.addEventListener('click', () => {
    overlay.remove();
  });
};

export const modalControl = async () => {
  await loadStyle('/css/add-good.css');

  addBtn.addEventListener('click', () => {
    openModal();
    closeModal();
  });
};

const getTotalPrice = (price, amount) => price * amount;

export const fillModal = (data) => {
  const id = getModalElements().id;
  const title = getModalElements().title;
  const category = getModalElements().category;
  const units = getModalElements().units;
  const discountCheckbox = getModalElements().discountCheckbox;
  const discount = getModalElements().discount;
  const description = getModalElements().description;
  const count = getModalElements().count;
  const price = getModalElements().price;
  const totalPrice = getModalElements().totalPrice;

  id.textContent = `ID: ${data.id}`;
  title.value = data.title;
  category.value = data.category;
  units.value = data.units;
  discountCheckbox.setAttribute('checked', true);
  discount.value = data.discount;
  description.value = data.description;
  count.value = data.count;
  price.value = data.price;
  totalPrice.textContent = ` ${getTotalPrice(data.price, data.count)}`;
};
