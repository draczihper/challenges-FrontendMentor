const emailInput = document.getElementById("email-input");
const emailError = document.getElementById("error");
const submitBtn = document.getElementById("btn");
const form = document.getElementById("form")


form.addEventListener("submit", (e) => {
    if (!emailInput.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailInput.value = emailInput.value;
        emailError.innerText = "Please provide a valid email address";
        emailInput.style.borderColor = "red";
        e.preventDefault();
    }
    if (emailInput.value == "" || emailInput.value == null) {
        emailError.innerText = "Whoops! It looks like you forgot to add your email";
        emailInput.style.borderColor = "red";
        e.preventDefault();
    }
});

