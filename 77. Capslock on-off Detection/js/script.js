const password = document.querySelector("#password");
const warning = document.querySelector("#warning");

password.addEventListener("keyup", (e) => {
	if (e.getModifierState("CapsLock")) warning.style.display = "block";
	else warning.style.display = "none";
});
