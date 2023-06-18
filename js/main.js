'use strict';

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

const goods = document.querySelector('.goods');
const addGoodModal = document.querySelector('.add-good');
const goodTotalPrice = addGoodModal.querySelector('.add-good__total-num');
const addBtn = goods.querySelector('.goods__add-good-button');
const closeAddGoodModal =
addGoodModal.querySelector('.add-good__close-button');
const mainTable = goods.querySelector('.goods__table');
const form = addGoodModal.querySelector('.add-good__form');
const {
  discountCheckbox,
  discountInput,
  price: priceInput,
  amount: amountInput,
} = form;
const elTotalPrice = goods.querySelector('.goods__total-num');
const addNewGoodArr = (good, arr) => {
  arr.push(good);
};

{
  const mainPageControl = () => {
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
      const keys = Object.keys(obj);
      let i = 0;

      for (let value of values) {
        if (typeof value === 'object') {
          value = parsingNestedObject(value);
        }
        elem.insertAdjacentHTML(
            'beforeend', `<td class="goods__table-${keys[i]}">${value}</td>`,
        );
        i++;
      }

      elem.insertAdjacentHTML(
          'beforeend',
          `<td class="goods__table-edit goods__table-align-right">
            <button class="goods__table-button goods__table-button-edit">
            </button>
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

    const renderMainGoods = (arr) => {
      arr.map((item) => {
        const newRow = createRow(item);
        mainTable.appendChild(newRow);
      });
    };

    const getAllGoodsTotalPrice = () => {
      const elementsGoodsPrices =
        mainTable.querySelectorAll('.goods__table-total');
      let totalPrice = 0;
      elementsGoodsPrices.forEach(element => {
        totalPrice += Number(element.textContent);
      });

      elTotalPrice.textContent = `${totalPrice} руб.`;
    };

    const delGood = () => {
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
          getAllGoodsTotalPrice();
          console.log(goodsArr);
        }
      });
    };

    return {
      renderMainGoods,
      delGood,
      getAllGoodsTotalPrice,
    };
  };

  const addGoodModalControl = () => {
    const addGoodModalOpen = () => {
      addGoodModal.classList.add('add-good--visible');
      goodTotalPrice.textContent = `0 руб`;
    };

    const addGoodModalClose = () => {
      addGoodModal.classList.remove('add-good--visible');
    };

    addBtn.addEventListener('click', addGoodModalOpen);
    goods.addEventListener('click', addGoodModalClose, true);
    closeAddGoodModal.addEventListener('click', addGoodModalClose);

    const addGoodControl = () => {
      const getDiscountSize = (fullPrice, discount) =>
        Number(fullPrice) * Number(discount) * 0.01;
      const getDiscountedPrice = (fullPrice, discountSize) =>
        Number(fullPrice) - discountSize;
      const getTotalPrcice = (price, amount) => price * Number(amount);

      const createNewGood = (newGoodData) => {
        const id = Date.parse(new Date());
        const title = newGoodData.title;
        const category = newGoodData.category;
        const units = newGoodData.units;
        const amount = newGoodData.amount;
        const fullPrice = newGoodData.price;
        const discountSize =
          getDiscountSize(fullPrice, newGoodData.discountInput);
        const price = getDiscountedPrice(fullPrice, discountSize);
        const total = getTotalPrcice(price, amount);
        const images = newGoodData.images;
        const newGood = {
          id, title, category, units, amount, price, total, images,
        };

        return newGood;
      };

      const showTotalPrice = () => {
        const watchedElements =
          [priceInput.name, amountInput.name, discountInput.name];

        form.addEventListener('change', e => {
          if (watchedElements.includes(e.target.name)) {
            const discountSize =
              getDiscountSize(priceInput.value, discountInput.value);
            const discountedPrice =
              getDiscountedPrice(priceInput.value, discountSize);
            const totalPrice =
              getTotalPrcice(discountedPrice, amountInput.value);
            goodTotalPrice.textContent = `${totalPrice} руб`;
          }
        });
      };

      return {
        createNewGood,
        showTotalPrice,
      };
    };

    const formAddGoodsControl =
    (createNewGood, renderMainGoods, getAllGoodsTotalPrice) => {
      form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const newGoodData = Object.fromEntries(formData);

        const newGood = createNewGood(newGoodData);

        const addNewGoodMainTable = () => {
          const newGoodArr = [newGood];
          renderMainGoods(newGoodArr);
          getAllGoodsTotalPrice();
        };

        addNewGoodArr(newGood, goodsArr);
        addNewGoodMainTable();
        addGoodModalClose(),
        form.reset();
      });
    };

    const discountInputControl = () => {
      discountCheckbox.addEventListener('change', () => {
        if (discountCheckbox.checked) {
          discountInput.removeAttribute('disabled');
        } else {
          discountInput.setAttribute('disabled', '');
          discountInput.value = '';
        }
      });
    };

    return {
      addGoodModalOpen,
      addGoodModalClose,
      addGoodControl,
      createNewGood: addGoodControl().createNewGood,
      showTotalPrice: addGoodControl().showTotalPrice,
      formAddGoodsControl,
      discountInputControl,
    };
  };


  const init = () => {
    const {
      createNewGood,
      showTotalPrice,
      formAddGoodsControl,
      discountInputControl,
    } = addGoodModalControl();

    const {
      renderMainGoods,
      delGood,
      getAllGoodsTotalPrice,
    } = mainPageControl();

    delGood();
    renderMainGoods(goodsArr);
    formAddGoodsControl(createNewGood, renderMainGoods, getAllGoodsTotalPrice);
    discountInputControl();
    getAllGoodsTotalPrice();
    showTotalPrice();
  };

  window.goodsInit = init;
}
