const textarea = document.querySelector("#input-textarea");
const wordCount = document.querySelector("#word-count");
const wordCharac = document.querySelector("#charac-count");

textarea.addEventListener("input", () => {
	wordCharac.textContent = textarea.value.length;

	let text = textarea.value.trim();
  
	wordCount.textContent = text.split(/\s+/).filter((item) => item).length;
});
