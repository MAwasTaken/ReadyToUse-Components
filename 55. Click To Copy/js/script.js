const copyText = document.querySelector(".copyText");
const button = document.querySelector(".btn");
const pasteText = document.querySelector(".pasteText");
const toolTip = document.querySelector(".tooltip");

button.addEventListener("click", () => {
	copyText.select();
	pasteText.value = "";

	if (document.execCommand("copy")) {
		pasteText.focus();
		toolTip.classList.add("show");

		setTimeout(() => {
			toolTip.classList.remove("show");
		}, 1000);
	} else {
		alert("lol");
	}
});
