// AUX

const gEl = (el) => document.querySelector(el);
const cEl = (el) => document.createElement(el);

const randomNum = Math.ceil(Math.random() * 15);

function removeBefore() {
  const getList = document.querySelectorAll(".info-w");

  if (getList) {
    getList.forEach((el) => el.remove());
  }
}

export { gEl, cEl, randomNum, removeBefore };
