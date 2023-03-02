const tabMenu = document.querySelector(".tab-btn").children;
const item = document.querySelector(".portfolio-gallery").children;
const gallery = document.querySelector(".portfolio-gallery");
const galleryItem = gallery.querySelectorAll(".item");
const lightBox = document.querySelector(".lightBox");
const lightBoxImg = lightBox.querySelector("img");
const close = document.querySelector(".close");

for (let i = 0; i < tabMenu.length; i++) {
	tabMenu[i].addEventListener("click", function () {
		for (let j = 0; j < tabMenu.length; j++) tabMenu[j].classList.remove("active");

		this.classList.add("active");

		const target = this.getAttribute("data-target");

		for (let k = 0; k < item.length; k++) {
			item[k].style.display = "none";

			if (target == item[k].getAttribute("data-id")) item[k].style.display = "block";

			if (target == "all") item[k].style.display = "block";
		}
	});
}

lightBox.addEventListener("click", () => {
	if (event.target != lightBoxImg) {
		lightBox.classList.remove("show");
	}
});

close.addEventListener("click", () => {
	lightBox.classList.remove("show");
});

galleryItem.forEach((item) => {
	item.querySelector("span").addEventListener("click", function () {
		lightBox.classList.add("show");

		lightBoxImg.src = item.querySelector("img").getAttribute("src");
	});
});
