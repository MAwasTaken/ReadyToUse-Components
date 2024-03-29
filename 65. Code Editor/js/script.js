const left = document.querySelector(".left");
const right = document.querySelector(".right");
const bar = document.querySelector(".bar");
const editor = document.querySelector(".editor");
const run = document.querySelector(".btn-run");
const iframe = document.querySelector(".iframe");
const darkMode = document.querySelector(".btn-dark");
const lightMode = document.querySelector(".btn-light");

const drag = (e) => {
	e.preventDefault();

	document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();

	left.style.width = e.pageX - bar.offsetWidth / 3 + "px";
	editor.resize();
};

bar.addEventListener("mousedown", () => {
	document.addEventListener("mousemove", drag);
});

bar.addEventListener("mouseup", () => {
	document.removeEventListener("mousemove", drag);
});

run.addEventListener("click", () => {
	const html = editor.textContent;
	iframe.src = "data:text/html;charset:utf-8," + encodeURI(html);
});

darkMode.addEventListener("click", () => {
	editor.style.background = "#333";
	editor.style.color = "#fff";
});

lightMode.addEventListener("click", () => {
	editor.style.background = "#fff";
	editor.style.color = "#333";
});

document.getElementById("live").onclick = function() {
	if (this.checked) {
		editor.addEventListener("keyup", function() {
			const html = editor.textContent;
			iframe.src = "data:text/html;charset:utf-8," + encodeURI(html);
		});
	}
};
