import {mainTable} from './getElements.js';
import {parsingNestedObject} from './utils.js';
import {correctOrderOfProp} from './data.js';

const renderImgString = (imgValue) => {
  let resultHtml = ``;
  if (typeof imgValue === 'object') {
    imgValue = parsingNestedObject(imgValue);
    resultHtml = `
        <td class="goods__table-img">
          <button class="goods__table-button goods__table-button-no-img 
            goods__picture" data-pic="${imgValue[0]}">
            </button>
        </td>`;
  } else if (imgValue === 'image/notimage.jpg') {
    resultHtml = ` 
      <td class="goods__table-img">
        <button class="goods__table-button goods__table-button-no-img">
        </button>
      </td>`;
  } else {
    resultHtml = `<td class="goods__table-img">${imgValue}</td>`;
  }

  return resultHtml;
};

const renderEditButton = (elem) => {
  elem.insertAdjacentHTML(
      'beforeend',
      `<td class="goods__table-edit">
        <button class="goods__table-button goods__table-button-edit"></button>
      </td>`,
  );
};

const renderDelButton = (elem) => {
  elem.insertAdjacentHTML(
      'beforeend',
      `<td class="goods__table-cart">
        <button class="goods__table-button goods__del"></button>
      </td>`,
  );
};

const renderRow = (obj) => {
  const elem = document.createElement('tr');
  elem.classList.add('good');
  const keys = Object.keys(obj);

  for (let i = 0; i < correctOrderOfProp.length; i++) {
    for (const key of keys) {
      if (key === correctOrderOfProp[i]) {
        if (key === 'image') {
          const string = renderImgString(obj[key]);
          elem.insertAdjacentHTML('beforeend', string);
        } else {
          elem.insertAdjacentHTML('beforeend',
              `<td class="goods__table-${keys[i]}">${obj[key]}</td>`,
          );
        }
      }
    }
  }

  renderEditButton(elem);
  renderDelButton(elem);

  return elem;
};

export const renderMainGoods = (arr) => {
  arr.map((item) => {
    const newRow = renderRow(item);
    mainTable.appendChild(newRow);
  });
};
