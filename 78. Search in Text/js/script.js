function search() {
	let textToSearch = document.querySelector("#text-to-search").value;
	let paragraph = document.querySelector("#paragraph");

	textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

	let pattern = new RegExp(`${textToSearch}`, "gi");
  
	paragraph.innerHTML = paragraph.textContent.replace(pattern, (match) => `<mark>${match}</mark>`);
}
