const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const list = document.querySelector('#ingredients');


const creatLi = (arr) => arr.map(el => `<li class="item">${el}</li>`);


const listItem = creatLi(ingredients).join("");


list.insertAdjacentHTML("beforeend", listItem)













  


