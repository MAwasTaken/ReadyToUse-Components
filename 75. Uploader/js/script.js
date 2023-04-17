const dragArea = document.querySelector(".drag-area");
const header = document.querySelector("header");
const button = document.querySelector("button");
const input = document.querySelector("input");
let file;

button.onclick = () => input.click();

input.addEventListener("change", function () {
	file = this.files[0];

	showImage();

	dragArea.classList.add("active");
});

dragArea.addEventListener("dragover", function (event) {
	event.preventDefault();

	dragArea.classList.add("active");
	header.textContent = "Release To Upload File";
});

dragArea.addEventListener("dragleave", function () {
	dragArea.classList.remove("active");
	header.textContent = "Drag and Drop to Upload";
});

dragArea.addEventListener("drop", function (event) {
	event.preventDefault();

	file = event.dataTransfer.files[0];

	showImage();
});

function showImage() { 
	let fileType = file.type;
	let validExtensions = ["image/jpeg", "image/jpg", "image/png"];

	if (validExtensions.includes(fileType)) {
		let fileReader = new FileReader();

		fileReader.onload = () => {
			let fileURL = fileReader.result;
			let imgTag = `<img src="${fileURL}" />`;
			dragArea.innerHTML = imgTag;
		};

		fileReader.readAsDataURL(file);
	} else {
		alert("The Selected File Is Not An Image, Please Select An Image");

		dragArea.classList.remove("active");
	}
}
