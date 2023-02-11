const dropOne = document.querySelector(".drop-one");
const menuOne = document.querySelector(".menu-one");
const bars = document.querySelector(".bars");
const navbar = document.querySelector("#navbar");

bars.addEventListener("click", () => {
	navbar.classList.toggle("active");
});

dropOne.addEventListener("click", () => {
	menuOne.classList.toggle("show");
});
