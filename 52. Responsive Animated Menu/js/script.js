const navToggle = document.querySelector(".nav-toggler");
const nav = document.querySelector("nav");
const close = document.querySelector(".close");
const navOverlay = document.querySelector(".nav-overlay");

navToggle.addEventListener("click", () => {
	navShow();
});

close.addEventListener("click", () => {
	navHide();
});

navOverlay.addEventListener("click", () => {
	navHide();
});

function navShow() {
	nav.classList.add("open");
	navOverlay.classList.add("open");
	navOverlay.style.transition = "all 0.5s ease";
	nav.style.transition = "all 0.3s ease .5s";
}

function navHide() {
	nav.classList.remove("open");
	navOverlay.classList.remove("open");
	navOverlay.style.transition = "all 0.3s ease 0.5s";
	nav.style.transition = "all 0.5s ease";
}
