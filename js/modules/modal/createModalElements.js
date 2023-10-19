export const createAddGoodOverlay = () => {
  const addGoodOverlay = document.createElement('div');
  addGoodOverlay.className = 'overlay';

  return addGoodOverlay;
};

export const createAddGoodModal = () => {
  const addGoodModal = document.createElement('div');
  addGoodModal.className = 'add-good';

  return addGoodModal;
};

export const createAddGoodContainer = () => {
  const container = document.createElement('div');
  container.className = 'modal-container';

  return container;
};

export const createAddGoodWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'add-good__wrapper';

  return wrapper;
};

export const createAddGoodTitle = () => {
  const h2 = document.createElement('h2');
  h2.className = 'add-good__title';
  h2.textContent = 'Добавить товар';

  return h2;
};

export const createIdSpan = () => {
  const span = document.createElement('span');
  span.className = 'add-good-id';

  return span;
};

export const createAddGoodCloseButton = () => {
  const closeButton = document.createElement('button');
  closeButton.className = 'add-good__close-button';
  closeButton.setAttribute('type', 'button');

  return closeButton;
};

export const createAddGoodLine = () => {
  const line = document.createElement('div');
  line.className = 'add-good__line line';

  return line;
};

export const createAddGoodForm = () => {
  const form = document.createElement('form');
  form.className = 'add-good__form form';
  form.id = 'add-goodForm';

  return form;
};

export const createAddGoodFormLableName = () => {
  const labelName = document.createElement('label');
  labelName.className = 'form__label form__label-name';
  labelName.setAttribute('tabindex', '0');

  return labelName;
};

export const createAddGoodFormLableCategory = () => {
  const label = document.createElement('label');
  label.className = 'form__label form__label-category';
  label.setAttribute('tabindex', '0');

  return label;
};

export const createAddGoodFormLableUnits = () => {
  const label = document.createElement('label');
  label.className = 'form__label form__label-units';
  label.setAttribute('tabindex', '0');

  return label;
};

export const createAddGoodFormNameSpan = () => {
  const span = document.createElement('span');
  span.className = 'form__span';
  span.textContent = 'Наименование';

  return span;
};

export const createAddGoodFormCategorySpan = () => {
  const span = document.createElement('span');
  span.className = 'form__span';
  span.textContent = 'Категория';

  return span;
};

export const createAddGoodFormUnitsSpan = () => {
  const span = document.createElement('span');
  span.className = 'form__span';
  span.textContent = 'Единицы измерения';

  return span;
};

export const createAddGoodFormNameInput = () => {
  const input = document.createElement('input');
  input.classList = 'form__input';
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'title');
  input.setAttribute('tabindex', '-1');
  input.setAttribute('required', 'required');

  return input;
};


export const createAddGoodFormCategoryInput = () => {
  const input = document.createElement('input');
  input.classList = 'form__input';
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'category');
  input.setAttribute('tabindex', '1');
  input.setAttribute('required', 'required');

  return input;
};

export const createAddGoodFormUnitsInput = () => {
  const input = document.createElement('input');
  input.classList = 'form__input';
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'units');
  input.setAttribute('tabindex', '1');
  input.setAttribute('required', 'required');

  return input;
};

export const createAddGoodFormDiscountWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'form__discount-wrapper';

  return wrapper;
};

export const createAddGoodFormDiscountSpan = () => {
  const span = document.createElement('span');
  span.className = 'form__discount-span';
  span.textContent = 'Дисконт';

  return span;
};

export const createAddGoodDiscountLabelCheckbox = () => {
  const label = document.createElement('label');
  label.className = 'form__label-discount-checkbox';
  label.setAttribute('tabindex', '0');

  return label;
};

export const createAddGoodFormDiscountInputCheckbox = () => {
  const input = document.createElement('input');
  input.classList = 'form__discount-checkbox-input';
  input.setAttribute('type', 'checkbox');
  input.setAttribute('name', 'discountCheckbox');
  input.setAttribute('tabindex', '-1');

  return input;
};

export const createAddGoodDiscountLabel = () => {
  const label = document.createElement('label');
  label.className = 'form__label-discount';
  label.setAttribute('tabindex', '0');

  return label;
};

export const createAddGoodFormDiscountInput = () => {
  const input = document.createElement('input');
  input.classList = 'form__discount-input';
  input.setAttribute('type', 'number');
  input.setAttribute('min', '0');
  input.setAttribute('max', '100');
  input.setAttribute('name', 'discountInput');
  input.setAttribute('tabindex', '-1');
  input.setAttribute('disabled', 'tue');

  return input;
};

export const createAddGoodDescriptionLabel = () => {
  const label = document.createElement('label');
  label.className = 'form__label form__label-description';
  label.setAttribute('tabindex', '0');

  return label;
};

export const createAddGoodAmountLabel = () => {
  const label = document.createElement('label');
  label.className = 'form__label form__label-amount';
  label.setAttribute('tabindex', '0');

  return label;
};

export const createAddGoodPriceLabel = () => {
  const label = document.createElement('label');
  label.className = 'form__label form__label-price';
  label.setAttribute('tabindex', '0');

  return label;
};

export const createAddGoodAddingImgLabel = () => {
  const label = document.createElement('label');
  label.className = 'form__adding-good-label';
  label.setAttribute('tabindex', '0');

  return label;
};

export const createAddGoodFormDescriptionSpan = () => {
  const span = document.createElement('span');
  span.className = 'form__span';
  span.textContent = 'Описание';

  return span;
};

export const createAddGoodFormAmountSpan = () => {
  const span = document.createElement('span');
  span.className = 'form__span';
  span.textContent = 'Количество';

  return span;
};

export const createAddGoodFormPriceSpan = () => {
  const span = document.createElement('span');
  span.className = 'form__span';
  span.textContent = 'Цена';

  return span;
};

export const createAddGoodAddingImgSpan = () => {
  const span = document.createElement('span');
  span.className = 'form__adding-good-span';
  span.textContent = 'Добавить изображение';

  return span;
};


export const createAddGoodFormDescriptionTextarea = () => {
  const textarea = document.createElement('textarea');
  textarea.className = 'form__textarea';
  textarea.setAttribute('name', 'description');
  textarea.setAttribute('tabindex', '-1');
  textarea.setAttribute('required', 'required');
  textarea.setAttribute('minlength', 80);

  return textarea;
};

export const createAddGoodFormAmountInput = () => {
  const input = document.createElement('input');
  input.classList = 'form__input';
  input.setAttribute('type', 'number');
  input.setAttribute('min', '0');
  input.setAttribute('name', 'amount');
  input.setAttribute('tabindex', '-1');
  input.setAttribute('required', 'required');

  return input;
};

export const createAddGoodFormPriceInput = () => {
  const input = document.createElement('input');
  input.classList = 'form__input';
  input.setAttribute('type', 'number');
  input.setAttribute('min', '0');
  input.setAttribute('name', 'price');
  input.setAttribute('tabindex', '-1');
  input.setAttribute('required', 'required');

  return input;
};


export const createAddGoodFormAddingImgInput = () => {
  const input = document.createElement('input');
  input.classList = 'form__adding-good-input';
  input.setAttribute('type', 'file');
  input.setAttribute('name', 'images');
  input.setAttribute('accept', 'img');
  input.setAttribute('tabindex', '-1');


  return input;
};


export const createAddGoodFormErrorTitle = () => {
  const h3 = document.createElement('h3');
  h3.className = 'form__adding-good-error-img-size';
  h3.textContent = 'Изображение не должно превышать размер 1 Мб';

  return h3;
};

export const createAddGoodTotalWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'add-good__total-wrapper';

  return wrapper;
};

export const createAddGoodTotalP = () => {
  const p = document.createElement('p');
  p.className = 'add-good__total total';
  p.textContent = 'Итоговая стоимость:';

  return p;
};

export const createAddGoodTotalNum = () => {
  const span = document.createElement('span');
  span.className = 'add-good__total-num total__num';
  span.textContent = ' 0';

  return span;
};

export const createAddGoodButton = () => {
  const button = document.createElement('button');
  button.className = 'add-good__form-button';
  button.setAttribute('form', 'add-goodForm');
  button.setAttribute('type', 'submit');
  button.setAttribute('value', 'formButton');
  button.textContent = 'Добавить товар';

  return button;
};

export const createMessageImgSize = () => {
  const h3 = document.createElement('h3');
  h3.className = 'form__adding-good-error-img-size';
  h3.textContent = 'Изображение не должно превышать размер 1 Мб';

  return h3;
};

export const createImgPreviewWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'form__adding-good-img-wrap';

  return wrapper;
};

export const createImgPreview = () => {
  const img = document.createElement('img');
  img.className = 'form__adding-good-img-preview';

  return img;
};

export const createDelImgPreviewOverlay = () => {
  const overlay = document.createElement('div');
  overlay.className = `form__adding-good-img-preview-del-overlay`;

  return overlay;
};

export const createDelImgPreview = () => {
  const img = document.createElement('div');
  img.className = 'form__adding-good-img-preview-del';

  return img;
};
