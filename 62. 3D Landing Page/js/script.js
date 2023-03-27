const hambergurMenu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hambergurMenu.addEventListener("click", () => {
	container.classList.toggle("active");
});
