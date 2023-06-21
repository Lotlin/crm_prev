import {renderMainGoods} from './modules/render.js';
import {goodsArr} from './modules/data.js';
import {
  delGood,
  showAllGoodsTotalPrice,
  createNewGood,
  showNewGoodTotalPrice,
} from './modules/serviceCRM.js';
import {addGoodModalControl, discountInputControl, formAddGoodsControl}
  from './modules/control.js';

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
  };

  window.goodsInit = init;
}
