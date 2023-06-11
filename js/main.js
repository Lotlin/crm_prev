'use strict';

const addGood = document.querySelector('.add-good');
addGood.classList.add('add-good--visible');
const addGoodVision = document.querySelector('.add-good--visible');
addGoodVision.style.setProperty('display', 'flex');

const addGoodHeader = addGood.querySelector('.add-good__title');
const addGoodCloseButton = addGood.querySelector('.add-good__close-button');
const addGoodForm = addGood.querySelector('.add-good__form');
const addGoodFormCheckbox = addGoodForm.querySelector('.form__discount-checkbox-input');
const addGoodFormDiscount = addGoodForm.querySelector('.form__discount-input');
const addGoodTotalCost = addGood.querySelector('.add-good__total');


const changeGood = document.querySelector('.change-good');
changeGood.classList.add('change-good--visible');
const changeGoodVision = document.querySelector('.change-good--visible');
changeGoodVision.style.setProperty('display', 'flex');

const changeGoodHeader = changeGood.querySelector('.change-good-title');
const changeGoodCloseButton = changeGood.querySelector('.add-good__close-button');
const changeGoodId = changeGood.querySelector('.change-good-id');
const changeGoodForm = changeGood.querySelector('.add-good__form');
const changeGoodFormCheckbox = changeGoodForm.querySelector('.form__discount-checkbox-input');
const changeGoodFormDiscount = changeGoodForm.querySelector('.form__discount-input');
const changeGoodTotalCost = changeGood.querySelector('.add-good__total');


const goodError = document.querySelector('.add-good__error');
goodError.classList.add('add-good__error--visible');
const goodErrorVision = document.querySelector('.add-good__error--visible');
goodErrorVision.style.setProperty('display', 'flex');

const goodErrorHeader = changeGood.querySelector('.add-good__error-title');
const goodErrorCloseButton = changeGood.querySelector('.add-good__error-close-button');
