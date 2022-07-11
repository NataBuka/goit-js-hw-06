
const categoryEl = document.querySelectorAll('.item');
const numberCategoryEl = categoryEl.length;

console.log('Number of categories:', numberCategoryEl);


categoryEl.forEach(categori => {
  const nameOfEl = categori.querySelector('h2');
  const numberOfEl = categori.querySelectorAll('li');

  console.log(`Category: ${nameOfEl.textContent}`);
  console.log(`Elements: ${numberOfEl.length}`);
});