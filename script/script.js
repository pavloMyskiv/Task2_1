/** @format */

const button = document.getElementById('button');
const span = document.querySelector('span');
const wrapper = document.getElementById('wrapper');

const getRandonNum = () => {
  return Math.floor(Math.random() * 256);
};

const getRandomColor = () => {
  const r = getRandonNum(),
    g = getRandonNum(),
    b = getRandonNum();

  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

const setRandomColor = (block, text) => {
  const color = getRandomColor();
  text.textContent = `${color}`;
  block.style.backgroundColor = color;
};

setRandomColor(wrapper, span);

button.addEventListener('click', function () {
  setRandomColor(wrapper, span);
});
