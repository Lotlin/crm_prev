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

const testArr = [
  {
    'id': 246016548,
    'title': 'Навигационная система Soundmax',
    'category': 'Техника для дома',
    'units': 'шт',
    'amount': 5,
    'price': 300,
    'total': 1500,
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    'id': 215796548,
    'title': 'Радиоуправляемый автомобиль Cheetan',
    'category': `Внедорожник на дистанционном управлении. 
      Скорость 25км/ч. Возраст 7 - 14 лет`,
    'units': 'шт',
    'amount': 3,
    'price': 100,
    'total': 300,
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
      'big': 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    'id': 215796548,
    'title': 'Витая пара PROConnect 01-0043-3-25',
    'category': `Всего лишь один шаг сделает ваш телевизор умным, 
      Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, 
      сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D`,
    'units': 'шт',
    'amount': 70,
    'price': 10,
    'total': 700,
    'images': {
      'small': 'img/smrtxiaomi11t-m.jpg',
    },
  },
];

const parsingNestedObject = (obj) => {
  const valArr = [];
  const nestedValues = Object.values(obj);
  for (const val of nestedValues) {
    valArr.push(val);
  }

  return valArr;
};

const createRow = (obj) => {
  const elem = document.createElement('tr');
  const values = Object.values(obj);

  for (let value of values) {
    if (typeof value === 'object') {
      value = parsingNestedObject(value);
    }

    elem.insertAdjacentHTML('beforeend', `<td>${value}</td>`);
  }

  return elem;
};

const renderGoods = (arr, table) => {
  arr.map((item) => {
    const newRow = createRow(item);
    table.appendChild(newRow);
  });

  return true;
};

const table = document.querySelector('.goods__table');
renderGoods(testArr, table);
