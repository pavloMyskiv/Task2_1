/** @format */

const button = document.getElementById('button');
const span = document.querySelector('span');
const wrapper = document.getElementById('wrapper');

const getRandonNum = (num) => {
  return Math.floor(Math.random() * num);
};

const getRandomColor = () => {
  const colorMaxValue = 256;
  const r = getRandonNum(colorMaxValue);
  const g = getRandonNum(colorMaxValue);
  const b = getRandonNum(colorMaxValue);

  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

const setRandomColor = (block, text) => {
  const color = getRandomColor();
  text.textContent = color;
  block.style.backgroundColor = color;
};

setRandomColor(wrapper, span);

button.addEventListener('click', function () {
  setRandomColor(wrapper, span);
});
