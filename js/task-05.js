const span = document.querySelector("#name-output");
const input = document.querySelector("#name-input");

input.addEventListener("input", onInput);

function onInput(event) {
    if(event.currentTarget.value !== "") {
     return   span.textContent = event.currentTarget.value;
     }

     return  span.textContent = 'Anonymous'   
     }

