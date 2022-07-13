const input = document.querySelector('#validation-input');
const validInput = Number(input.getAttribute("data-length"));
console.log(validInput);
input.addEventListener("blur", (event) => {

    if (event.currentTarget.value.length === validInput) { 
    event.currentTarget.classList.add('valid')
    event.currentTarget.classList.remove('invalid') 
    }
    else{
        event.currentTarget.classList.add('invalid')
        event.currentTarget.classList.remove('valid')
    }
    })

