const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const patern = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInput();
});

function checkInput() {
	const userNameValue = userName.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if (userNameValue === "") setError(userName, "* Required!");
	else setSuccess(userName);

	if (emailValue === "") setError(email, "* Required!");
	else if (!isEmail(emailValue)) setError(email, "* Email is Not Valid!");
	else setSuccess(email);

	if (passwordValue === "") setError(password, "* Required!");
	else setSuccess(password);

	if (password2Value === "") setError(password2, "* Required!");
	else if (password2Value !== passwordValue) setError(password2, "* Passwords Are Not The Same!");
	else setSuccess(password2);
}

function setError(input, message) {
	const formControl = input.parentElement;
	const span = formControl.querySelector("span");

	span.innerHTML = message;

	formControl.className = "form-control error";
}

function setSuccess(input) {
	const formControl = input.parentElement;

	formControl.className = "form-control success";
}

function isEmail(email) {
	return patern.test(email);
}
