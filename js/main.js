import {renderMainGoods} from './modules/render.js';
import {goodsArr} from './modules/data.js';
import {
  delGood,
  showAllGoodsTotalPrice,
  createNewGood,
  showNewGoodTotalPrice,
} from './modules/serviceCRM.js';
import {addGoodModalControl, discountInputControl,
  formAddGoodsControl, showGoodPicture}
  from './modules/control.js';
import {mainTable} from './modules/getElements.js';

{
  const init = () => {
    renderMainGoods(goodsArr);
    delGood();
    showAllGoodsTotalPrice();
    showNewGoodTotalPrice();
    addGoodModalControl();
    discountInputControl();
    formAddGoodsControl(
        createNewGood, renderMainGoods, showAllGoodsTotalPrice);
    showGoodPicture(mainTable, 600, 600);
  };

  window.goodsInit = init;
}
