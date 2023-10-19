import loadStyle from './styleLoad.js';
import {renderAddGoodModal} from './renderModal.js';
import {getModalElements, addBtn} from '../getElements.js';
import {maxSizePriview} from '../data.js';
import {
  createNewGood,
  // httpRequest,
  showAllGoodsTotalPrice,
} from '../serviceCRM.js';
import {renderMainGoods} from '../render.js';
// import {url} from '../data.js';

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

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.remove();
    }
  });
};

const showAddGoodImgPreviewControl = async () => {
  const fileInput = getModalElements().addImgInput;
  const previewImg = getModalElements().previewImg;
  const previewImgWrapper = getModalElements().previewImgWrapper;
  const previewImgDel = getModalElements().priewImgDel;

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      if (fileInput.files[0].size > maxSizePriview) {
        const message = getModalElements().messageErrPreviewSize;
        message.classList.add('form__adding-good-error-img-size--visible');
        return true;
      } else {
        const src = URL.createObjectURL(fileInput.files[0]);
        previewImg.src = src;
        previewImgWrapper.classList.add('form__adding-good-img-wrap--visible');
      }
    }
  });

  previewImgDel.addEventListener('click', () => {
    previewImgWrapper.classList.remove('form__adding-good-img-wrap--visible');
  });
};

const inputControl = (input, validChar = 'cyrillicSpace') => {
  const validCharacters = {
    'cyrillicSpace': /[^а-я\s]/ig,
    'cyrillic': /[^а-я]/ig,
    'numbers': /[^\d]/ig,
  };

  input.addEventListener('input', () => {
    input.value = input.value.replace(validCharacters[validChar], '');
  });
};

const modalInputControl = () => {
  const titleInput = getModalElements().title;
  const categoryInput = getModalElements().category;
  const descriptionInput = getModalElements().description;
  const units = getModalElements().units;
  const count = getModalElements().count;
  const discount = getModalElements().discount;
  const price = getModalElements().price;

  inputControl(titleInput);
  inputControl(categoryInput);
  inputControl(descriptionInput);
  inputControl(units, 'cyrillic');
  inputControl(count, 'numbers');
  inputControl(discount, 'numbers');
  inputControl(price, 'numbers');
};

const closeModalAfterNewGoodAdded = () => {
  const overlay = getModalElements().overlay;
  overlay.remove();
};

const formAddGoodsControl = () => {
  const form = getModalElements().form;
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newGoodData = Object.fromEntries(formData);

    const newGood = createNewGood(newGoodData);

    const addNewGoodMainTable = () => {
      const newGoodArr = [newGood];
      renderMainGoods(newGoodArr);
      showAllGoodsTotalPrice();
    };
    // пока не добавляю в БД
    /*
    httpRequest(url, {
      method: 'POST',
      body: newGood,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    */
    addNewGoodMainTable();
    closeModalAfterNewGoodAdded();
  });
};

const discountInputControl = () => {
  const discountCheckbox = getModalElements().discountCheckbox;
  discountCheckbox.addEventListener('change', () => {
    const discountInput = getModalElements().discount;
    if (discountCheckbox.checked) {
      discountInput.removeAttribute('disabled');
    } else {
      discountInput.setAttribute('disabled', '');
      discountInput.value = '';
    }
  });
};

export const modalControl = async () => {
  await loadStyle('/css/add-good.css');

  addBtn.addEventListener('click', () => {
    openModal();
    showAddGoodImgPreviewControl();
    modalInputControl();
    closeModal();
    formAddGoodsControl();
    discountInputControl();
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
