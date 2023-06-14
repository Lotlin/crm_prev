'use strict';

const goods = document.querySelector('.goods');
const addBtn = goods.querySelector('.goods__add-good-button');

const addGoodModal = document.querySelector('.add-good');
const closeAddGoodModal = addGoodModal.querySelector('.add-good__close-button');

addBtn.addEventListener('click', () => {
  addGoodModal.classList.add('add-good--visible');
});

closeAddGoodModal.addEventListener('click', () => {
  addGoodModal.classList.remove('add-good--visible');
});

goods.addEventListener('click', () => {
  addGoodModal.classList.remove('add-good--visible');
}, true);
