const form = document.querySelector(".login-form");

form.addEventListener("submit", onLoginForm);

function onLoginForm(event){
    event.preventDefault();
    const elements = event.currentTarget.elements;
    const email = elements.email.value;
    const password = elements.password.value;
    if (email === "" || password === "") return alert("Заповніть усі поля");


    const formData = {
        email: email,
        password: password
    }
    console.log(formData);
    form.reset();
}


