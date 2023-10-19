import {
  goods,
  errModal,
  errCloseButton,
  mainTable,
} from './getElements.js';
import {getPictureWindowPosition, getGoodId} from './utils.js';
import {fetchRequest} from './serviceCRM.js';
import {openModal, closeModal, fillModal} from './modal/modalContorl.js';
import {getGoodDataUrl} from './data.js';


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

export const editGoodModal = () => {
  mainTable.addEventListener('click', e => {
    const target = e.target;
    if (target.closest('.goods__table-button-edit')) {
      openModal('editGood');
      closeModal();
      const goodId = getGoodId(target, 'good');
      const url = `${getGoodDataUrl}${goodId}`;
      fetchRequest(url, {
        callback: fillModal,
      });
    }
  });
};
