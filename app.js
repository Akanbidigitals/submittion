const submitButton = document.getElementById("submit-button");
const name = document.querySelector("input[type=text]");
const email = document.querySelector("input[type=email]");
const tel = document.querySelector("input[type=tel]");
let result;

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    result = `${name.value}

    ${email.value}

    ${tel.value}`;

    alert(result);
});