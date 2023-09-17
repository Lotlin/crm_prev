import {renderMainGoods} from './modules/render.js';
import {url} from './modules/data.js';
import {
  delGood,
  showAllGoodsTotalPrice,
  createNewGood,
  showNewGoodTotalPrice,
  httpRequest,
} from './modules/serviceCRM.js';
import {addGoodModalControl, discountInputControl,
  formAddGoodsControl, showGoodPicture, errModalClose}
  from './modules/control.js';
import {mainTable} from './modules/getElements.js';

{
  const init = () => {
    addGoodModalControl();
    httpRequest(url, {
      callback: renderMainGoods,
    });
    delGood();
    showAllGoodsTotalPrice();
    showNewGoodTotalPrice();
    discountInputControl();
    formAddGoodsControl(
        createNewGood, renderMainGoods, showAllGoodsTotalPrice);
    showGoodPicture(mainTable, 600, 600);
    errModalClose();
  };

  window.goodsInit = init;
}
