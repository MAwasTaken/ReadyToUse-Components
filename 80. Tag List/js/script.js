const ul = document.querySelector("ul");
const input = ul.querySelector("input");
let countNumber = document.querySelector(".details span");
const removeBtn = document.querySelector("button");

let maxTag = 10;
let tags = [];

countTag();

function countTag() {
	countNumber.innerText = maxTag - tags.length;
}

function createTag() {
	ul.querySelectorAll("li").forEach((li) => li.remove());
	tags
		.slice()
		.reverse()
		.forEach((tag) => {
			let liTag = `<li>${tag} <i class="fas fa-times" onclick="remove(this, '${tag}')"></i></li>`;
			ul.insertAdjacentHTML("afterbegin", liTag);
		});
	countTag();
}

function remove(element, tag) {
	let index = tags.indexOf(tag);
	tags = [...tags.slice(0, index), ...tags.slice(index + 1)];

	element.parentElement.remove();

	countTag();
}

function addTag(e) {
	if (e.key == "Enter") {
		let tag = e.target.value.replace(/\s+/g, " ");

		if (tag.length > 1 && !tags.includes(tag)) {
			if (tags.length < 10) {
				tag.split(",").forEach((tag) => {
					tags.push(tag);
					createTag();
				});
			}
		}
		e.target.value = "";
	}
}

input.addEventListener("keyup", addTag);

removeBtn.addEventListener("click", () => {
	tags.length = 0;
	ul.querySelectorAll("li").forEach((li) => li.remove());
  
	countTag();
});
