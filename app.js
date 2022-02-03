const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function handleLoginButtonClick() {
    console.dir(loginInput.value);
    console.log("click!!");
}


loginButton.addEventListener("click", handleLoginButtonClick);