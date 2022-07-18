function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs={
  input: document.querySelector("[type = number]"),
  btnCreate: document.querySelector("[data-create]"),
  btnDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes")
} 

refs.btnCreate.addEventListener("click", createBoxes);
refs.btnDestroy.addEventListener("click", destroyBoxes);

const arr = [];


function createBoxes(input) {
for( let i = 0; i <= input; i += 1){
const div = `<div width = ${20 + i * 10}px height = ${20 + i * 10}px></div>`
arr.push(div);



/*document.createElement("div");
div.style.width = `${20 + i * 10}px`;
div.style.height = `${20 + i * 10}px`;
div.style.backgroundColor = getRandomHexColor();

const result = refs.boxes.append(div);
console.log(result);
return result;*/
}
console.log(arr);
}
 
function destroyBoxes(){
  boxes.innerHTML = "";
}




