const bg = document.querySelector(".bg");
const span = document.querySelectorAll(".text span");
const text = document.querySelector(".text");
const line = document.querySelector("#line");

span.forEach((item) => {
	item.addEventListener("mouseover", (e) => {
		const id = item.getAttribute("data-id");
		const bgElem = bg.querySelector(`.id-${id}`);
		const card = item.getBoundingClientRect();
		const cardText = text.getBoundingClientRect();

		bg.querySelectorAll("img").forEach((img) => {
			img.style.display = "none";
		});

		bgElem.style.display = "block";
		bgElem.style.animation = "animate 1s ease forwards";

		line.style.width = card.width + "px";
		line.style.left = card.left - cardText.left + "px";
	});
});
