const indicator = document.getElementsByClassName("indecator");
const main = document.querySelector(".content");
const video = document.querySelector(".video");
const notification = document.querySelector("h1");
const button = document.querySelector("button");
const cart = document.querySelector(".btn");

for (let i = 0; i < indicator.length; i++) {
	indicator[i].onclick = (e) => {
		for (let j = 0; j < indicator.length; j++) indicator[j].classList.remove("active");

		indicator[i].classList.add("active");

		main.src = e.target.src;
		video.src = "";
		main.style.display = "block";
		video.style.display = "none";

		if (e.target == indicator[4]) {
			main.style.display = "none";
			video.style.display = "block";
			video.src = "vid/vid.mp4";
		}
	};
}

button.onclick = () => {
	let n = Number(notification.getAttribute("data-count") || 0);

	notification.setAttribute("data-count", n + 1);
	notification.classList.add("zero");

	if (n >= 1) {
		let alert = document.createElement("div");

		alert.classList.add("alert");
		alert.innerHTML = "This Product Is Available In The Shopping Cart";
		cart.appendChild(alert);
		notification.setAttribute("data-count", 1);
	}
};