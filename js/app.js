var btnSignIn = document.querySelector("#sign-in");
var btnSignUp = document.querySelector("#sign-up");
var body = document.querySelector("body");

btnSignIn.addEventListener("click", function () {
    body.className = "sign-in-js";
});

btnSignUp.addEventListener("click", function () {
    body.className = "sign-up-js";
});