function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const text = document.querySelector(".color");


button.addEventListener("click", changeColor);


function changeColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  text.textContent = `${newColor}`;
}