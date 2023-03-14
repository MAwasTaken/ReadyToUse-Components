const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const btn = document.querySelector("#btn");

function login() {
	loginBtn.style.right = "0";
	registerBtn.style.right = "450px";
	btn.style.right = "0";
}

function register() {
	loginBtn.style.right = "-450px";
	registerBtn.style.right = "0";
	btn.style.right = "110px";
}
