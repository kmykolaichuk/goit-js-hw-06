function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const span = document.querySelector('.color');
const changeBtn = document.querySelector('.change-color');

changeBtn.addEventListener('click', () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
});
