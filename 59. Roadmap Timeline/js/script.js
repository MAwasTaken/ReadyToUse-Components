(function () {
	const items = document.querySelectorAll(".timeline li");

	function isElementInViewPort(el) {
		let rect = el.getBoundingClientRect();

		return rect.top >= 0 && rect.right >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth);
	}

	function callBackFunction() {
		for (let i = 0; i < items.length; i++) {
			if (isElementInViewPort(items[i])) {
				items[i].classList.add("in-view");
			}
		}
	}

	window.addEventListener("scroll", callBackFunction);
	window.addEventListener("load", callBackFunction);
})();
