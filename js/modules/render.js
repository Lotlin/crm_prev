import {mainTable} from './getElements.js';
import {parsingNestedObject} from './utils.js';

const renderRow = (obj) => {
  const elem = document.createElement('tr');
  elem.classList.add('good');
  const values = Object.values(obj);
  const keys = Object.keys(obj);
  let i = 0;

  for (let value of values) {
    if (typeof value === 'object') {
      value = parsingNestedObject(value);
      elem.insertAdjacentHTML(
          'beforeend',
          `<td class="goods__table-img goods__table-align-right">
            <button class="goods__table-button goods__table-button-no-img 
              goods__picture" data-pic="${value[0]}">
              </button>
          </td>`,
      );
    } else {
      elem.insertAdjacentHTML(
          'beforeend', `<td class="goods__table-${keys[i]}">${value}</td>`,
      );
    }
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

export const renderMainGoods = (arr) => {
  arr.map((item) => {
    const newRow = renderRow(item);
    mainTable.appendChild(newRow);
  });
};
