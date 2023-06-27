import {
  form,
  discountCheckbox,
  discountInput,
  addBtn,
  goods,
  closeAddGoodModal,
  addGoodModal,
  goodTotalPrice,
} from './getElements.js';
import {goodsArr} from './data.js';
import {addNewGoodArr, getPictureWindowPosition} from './utils.js';

const addGoodModalOpen = () => {
  addGoodModal.classList.add('add-good--visible');
  goodTotalPrice.textContent = `0 руб`;
};

const addGoodModalClose = () => {
  addGoodModal.classList.remove('add-good--visible');
};

export const formAddGoodsControl =
  (createNewGood, renderMainGoods, showAllGoodsTotalPrice) => {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const newGoodData = Object.fromEntries(formData);

      const newGood = createNewGood(newGoodData);

      const addNewGoodMainTable = () => {
        const newGoodArr = [newGood];
        renderMainGoods(newGoodArr);
        showAllGoodsTotalPrice();
      };

      addNewGoodArr(newGood, goodsArr);
      addNewGoodMainTable();
      addGoodModalClose(),
      form.reset();
    });
  };

export const discountInputControl = () => {
  discountCheckbox.addEventListener('change', () => {
    if (discountCheckbox.checked) {
      discountInput.removeAttribute('disabled');
    } else {
      discountInput.setAttribute('disabled', '');
      discountInput.value = '';
    }
  });
};


export const addGoodModalControl = () => {
  addBtn.addEventListener('click', addGoodModalOpen);
  goods.addEventListener('click', addGoodModalClose, true);
  closeAddGoodModal.addEventListener('click', addGoodModalClose);
};

export const showGoodPicture = (mainTable, pictureWidth, pictureHeigth) => {
  mainTable.addEventListener('click', e => {
    const target = e.target;
    if (target.hasAttribute('data-pic')) {
      const link = target.getAttribute('data-pic');
      const picturePosition =
        getPictureWindowPosition(pictureWidth, pictureHeigth);
      open(`${link}`, '',
          `popup ${picturePosition},
          width=${pictureWidth}, height=${pictureHeigth}`,
      );
    }
  });
};
