import * as create from './createModalElements.js';

const renderTitleWrapper = (editGood = false) => {
  const wrapper = create.createAddGoodWrapper();
  const h2 = create.createAddGoodTitle();
  const span = create.createIdSpan();

  if (editGood) {
    h2.textContent = 'Изменить товар';
    span.textContent = 'ID:';
  }

  wrapper.append(h2);
  wrapper.append(span);

  return wrapper;
};

const renderLabelName = () => {
  const label = create.createAddGoodFormLableName();
  const span = create.createAddGoodFormNameSpan();
  const input = create.createAddGoodFormNameInput();

  label.append(span);
  label.append(input);

  return label;
};

const renderLabelCategory = () => {
  const label = create.createAddGoodFormLableCategory();
  const span = create.createAddGoodFormCategorySpan();
  const input = create.createAddGoodFormCategoryInput();

  label.append(span);
  label.append(input);

  return label;
};

const renderLabelUnits = () => {
  const label = create.createAddGoodFormLableUnits();
  const span = create.createAddGoodFormUnitsSpan();
  const input = create.createAddGoodFormUnitsInput();

  label.append(span);
  label.append(input);

  return label;
};

const renderLabelDiscountCheckbox = () => {
  const label = create.createAddGoodDiscountLabelCheckbox();
  const input = create.createAddGoodFormDiscountInputCheckbox();

  label.append(input);

  return label;
};

const renderLabelDiscount = () => {
  const label = create.createAddGoodDiscountLabel();
  const input = create.createAddGoodFormDiscountInput();

  label.append(input);


  return label;
};

const renderDiscountWrapper = () => {
  const wrapper = create.createAddGoodFormDiscountWrapper();
  const span = create.createAddGoodFormDiscountSpan();
  const labelCheckbox = renderLabelDiscountCheckbox();
  const label = renderLabelDiscount();

  wrapper.append(span);
  wrapper.append(labelCheckbox);
  wrapper.append(label);


  return wrapper;
};

const renderLabelDEscription = () => {
  const label = create.createAddGoodDescriptionLabel();
  const span = create.createAddGoodFormDescriptionSpan();
  const textarea = create.createAddGoodFormDescriptionTextarea();

  label.append(span);
  label.append(textarea);

  return label;
};

const renderLabelAmount = () => {
  const label = create.createAddGoodAmountLabel();
  const span = create.createAddGoodFormAmountSpan();
  const input = create.createAddGoodFormAmountInput();

  label.append(span);
  label.append(input);

  return label;
};

const renderLabelPrice = () => {
  const label = create.createAddGoodPriceLabel();
  const span = create.createAddGoodFormPriceSpan();
  const input = create.createAddGoodFormPriceInput();
  label.append(span);
  label.append(input);

  return label;
};

const renderLabelAddImg = () => {
  const label = create.createAddGoodAddingImgLabel();
  const span = create.createAddGoodAddingImgSpan();
  const input = create.createAddGoodFormAddingImgInput();
  label.append(span);
  label.append(input);

  return label;
};

const imgPreviewWrapper = () => {
  const wrapper = create.createImgPreviewWrapper();
  const imgPreview = create.createImgPreview();
  const delImgPreviewOverlay = create.createDelImgPreviewOverlay();
  const delImgPreview = create.createDelImgPreview();

  wrapper.append(imgPreview);
  wrapper.append(delImgPreview);
  wrapper.append(delImgPreviewOverlay);

  return wrapper;
};


const renderForm = () => {
  const form = create.createAddGoodForm();
  const labelName = renderLabelName();
  const labelCategory = renderLabelCategory();
  const labelUnits = renderLabelUnits();
  const discountWrapper = renderDiscountWrapper();
  const labelDEscription = renderLabelDEscription();
  const labelAmount = renderLabelAmount();
  const labelPrice = renderLabelPrice();
  const labelAddImg = renderLabelAddImg();
  const messageImgSize = create.createMessageImgSize();
  const imgPreviewWrap = imgPreviewWrapper();

  form.append(labelName);
  form.append(labelCategory);
  form.append(labelUnits);
  form.append(discountWrapper);
  form.append(labelDEscription);
  form.append(labelAmount);
  form.append(labelPrice);
  form.append(labelAddImg);
  form.append(messageImgSize);
  form.append(imgPreviewWrap);

  return form;
};

const renderTotalP = () => {
  const p = create.createAddGoodTotalP();
  const span = create.createAddGoodTotalNum();

  p.append(span);

  return p;
};


const renderTotalWrapper = () => {
  const totalWrapper = create.createAddGoodTotalWrapper();
  const totalP = renderTotalP();
  const button = create.createAddGoodButton();

  totalWrapper.append(totalP);
  totalWrapper.append(button);

  return totalWrapper;
};

const renderAddGoodContainer = (editGood = false) => {
  const container = create.createAddGoodContainer();
  const wrapper = renderTitleWrapper(editGood);
  const closeButton = create.createAddGoodCloseButton();
  const line = create.createAddGoodLine();
  const form = renderForm();
  const totalWrapper = renderTotalWrapper();

  container.append(wrapper);
  container.append(closeButton);
  container.append(line);
  container.append(form);
  container.append(totalWrapper);

  return container;
};

const renderModal = (editGood = false) => {
  const modal = create.createAddGoodModal();
  const container = renderAddGoodContainer(editGood);

  modal.append(container);


  return modal;
};

export const renderAddGoodModal = (editGood = false) => {
  const overlay = create.createAddGoodOverlay();
  const modal = renderModal(editGood);

  overlay.append(modal);

  return overlay;
};
