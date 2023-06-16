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

const goodsArr = [
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
    'id': 215796549,
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
    'id': 215796554,
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
  {
    'id': 246016541,
    'title': 'Навигационная система Soundmax',
    'category': 'Техника для дома',
    'units': 'шт',
    'amount': 5,
    'price': 300,
    'total': 1500,
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
  elem.classList.add('good');
  const values = Object.values(obj);

  for (let value of values) {
    if (typeof value === 'object') {
      value = parsingNestedObject(value);
    }

    elem.insertAdjacentHTML('beforeend', `<td>${value}</td>`);
  }

  elem.insertAdjacentHTML(
      'beforeend',
      `<td class="goods__table-edit goods__table-align-right">
        <button class="goods__table-button goods__table-button-edit"></button>
      </td>`,
  );

  elem.insertAdjacentHTML(
      'beforeend',
      `<td class="goods__table-cart goods__table-align-right">
        <button class="goods__table-button goods__del"></button>
      </td>`,
  );

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
renderGoods(goodsArr, table);

table.addEventListener('click', e => {
  const target = e.target;
  if (target.closest('.goods__del')) {
    target.closest('.good').remove();
    const idDeleted = target.closest('.good').childNodes[0].innerText;

    for (let i = 0; i < goodsArr.length; i++) {
      if (String(goodsArr[i].id) === idDeleted) {
        goodsArr.splice(i, 1);
      }
    }
  }

  console.log(goodsArr);
});
