const selector = document.querySelectorAll(".my-slider");
const productImage = document.querySelectorAll(".pro-img-area");

selector.forEach(mySlider);

function mySlider(element, index) {
	const slides = element.querySelector(".inner-width").children;

	width = slides[0].offsetWidth;

	for (let i = 0; i < slides.length; i++) slides[i].style.width = width + "px";

	element.querySelector(".inner-width").style.width = width * slides.length + "px";

	for (let i = 0; i < slides.length; i++) {
		const div = document.createElement("div");

		div.id = i;

		if (i == 0) div.classList.add("active");

		div.addEventListener("click", function () {
			element.querySelector(".inner-width").style.marginRight = -(this.id * width) + "px";

			const constrolButton = element.querySelector(".slide-controls").children;

			for (let j = 0; j < constrolButton.length; j++) constrolButton[j].classList.remove("active");

			this.classList.add("active");
		});

		element.querySelector(".slide-controls").appendChild(div);
	}
}

productImage.forEach(function (element) {
	const li = element.querySelector("ul").querySelectorAll("li");

	for (let i = 0; i < li.length; i++) {
		li[i].addEventListener("click", function () {
			const src = this.querySelector("img").getAttribute("src");

			element.querySelector(".img").querySelector("img").src = src;

			li.forEach(function (ele) {
				ele.classList.remove("active");
			});

			this.classList.add("active");
		});
	}
});
