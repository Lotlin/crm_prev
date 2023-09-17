import {
  form,
  discountCheckbox,
  discountInput,
  addBtn,
  goods,
  closeAddGoodModal,
  addGoodModal,
  goodTotalPrice,
  errModal,
  errCloseButton,
} from './getElements.js';
import {url} from './data.js';
import {getPictureWindowPosition} from './utils.js';
import {httpRequest} from './serviceCRM.js';

const addGoodModalOpen = () => {
  addGoodModal.classList.add('add-good--visible');
  goodTotalPrice.textContent = `0 руб`;
};

const addGoodModalClose = () => {
  addGoodModal.classList.remove('add-good--visible');
};

export const formAddGoodsControl =
  (createNewGood, renderMainGoods, showAllGoodsTotalPrice) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const newGoodData = Object.fromEntries(formData);

      const newGood = createNewGood(newGoodData);

      const addNewGoodMainTable = () => {
        const newGoodArr = [newGood];
        renderMainGoods(newGoodArr);/*
        httpRequest(url, {
          callback: renderMainGoods,
        });
        */
        showAllGoodsTotalPrice();
      };

      httpRequest(url, {
        method: 'POST',
        body: newGood,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      addNewGoodMainTable();
      addGoodModalClose();
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

export const errModalOpen = () => {
  errModal.classList.add('error--visible');
};


export const errModalClose = () => {
  errCloseButton.addEventListener('click', () => {
    errModal.classList.remove('error--visible');
  });

  goods.addEventListener('click', () => {
    errModal.classList.remove('error--visible');
  });
};
