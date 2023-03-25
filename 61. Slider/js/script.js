const slides = document.querySelector(".slider").children;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const indicator = document.querySelector(".indicator");
let index = 0;

prev.addEventListener("click", () => {
	prevSlide();
	updateCircleIndicator();
	resetTimer();
});

next.addEventListener("click", () => {
	nextSlide();
	updateCircleIndicator();
	resetTimer();
});

-(function () {
	for (let i = 0; i < slides.length; i++) {
		const div = document.createElement("div");

		div.innerHTML = i + 1;
		div.setAttribute("onclick", "indicatorSlide(this)");
		div.id = i;
		indicator.appendChild(div);

		if (i == 0) div.className = "active";
	}
})();

function updateCircleIndicator() {
	for (let i = 0; i < indicator.children.length; i++) indicator.children[i].classList.remove("active");

	indicator.children[index].classList.add("active");
}

function indicatorSlide(element) {
	index = element.id;

	changeSlide();
	updateCircleIndicator();
	resetTimer();
}

function prevSlide() {
	if (index == 0) index = slides.length - 1;
	else index--;

	changeSlide();
}

function nextSlide() {
	if (index == slides.length - 1) index = 0;
	else index++;

	changeSlide();
}

function changeSlide() {
	for (let i = 0; i < slides.length; i++) slides[i].classList.remove("active");

	slides[index].classList.add("active");
}

function resetTimer() {
	clearInterval(timer);

	timer = setInterval(autoPlay, 4000);
}

function autoPlay() {
	nextSlide();
}

let timer = setInterval(() => {
	autoPlay();
	updateCircleIndicator();
}, 4000);
