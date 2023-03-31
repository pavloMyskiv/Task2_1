/** @format */

const button = document.getElementById('button');
const span = document.querySelector('span');
const wrapper = document.getElementById('wrapper');

const getRandomColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

const setRandomColor = (block, text) => {
  let color = getRandomColor();
  text.textContent = `${color}`;
  block.style.backgroundColor = color;
};

setRandomColor(wrapper, span);

button.addEventListener('click', function () {
  setRandomColor(wrapper, span);
});
