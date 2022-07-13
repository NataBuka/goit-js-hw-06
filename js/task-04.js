const counter = document.querySelector('#counter');
const value = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;

decrementBtn.addEventListener("click", onDecrementBtnClick);

function onDecrementBtnClick() {
counterValue = counterValue - 1;
value.textContent = counterValue;
} 

incrementBtn.addEventListener("click", onIncrementBtnClick);

function onIncrementBtnClick() {
counterValue = counterValue + 1;
value.textContent = counterValue;
}