let form = document.getElementById("form");
let inputPass = document.querySelector(".password");
let inputEmail = document.querySelector(".email");
let errorMessage = document.getElementById("error-message");
let cities = document.getElementById("cities")

inputEmail.addEventListener("keyup", function () {
    if (inputEmail.value.trim() == "") {
        errorMessage.classList.remove("d-none");
        this.parentNode.lastElementChild.classList.add("disabled")
    } else {
        errorMessage.classList.add("d-none");
        this.parentNode.lastElementChild.classList.remove("disabled")
    }
})

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (inputEmail.value.trim() == "") {
        errorMessage.classList.remove("d-none");
    } else {
        errorMessage.classList.add("d-none");
    }
})

inputPass.addEventListener("keyup", function () {
    if (inputPass.value.trim() == "") {
        errorMessage.classList.remove("d-none");
        this.parentNode.lastElementChild.classList.add("disabled")
    } else {
        errorMessage.classList.add("d-none");
        this.parentNode.lastElementChild.classList.remove("disabled")
    }
})

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    if (inputPass.value.trim() == "") {
        errorMessage.classList.remove("d-none");
    } else {
        errorMessage.classList.add("d-none");
    }
})


cities.addEventListener("change", function (e) {
    console.log(this.value);
})