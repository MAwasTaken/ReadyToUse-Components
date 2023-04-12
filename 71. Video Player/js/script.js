const videoPlayer = document.querySelector(".video-player");
const video = document.querySelector(".video");
const playButton = document.querySelector(".play-button");
const volume = document.querySelector(".volume");
const currentTimeElement = document.querySelector(".current");
const duractionTimeElement = document.querySelector(".duration");
const progress = document.querySelector(".video-progress");
const progressBar = document.querySelector(".video-progress-fill");

playButton.addEventListener("click", function (e) {
	if (video.paused) {
		video.play();
		e.target.textContent = "▌▌";
	} else {
		video.pause();
		e.target.textContent = "▶";
	}
});

volume.addEventListener("mousemove", (e) => {
	video.volume = e.target.value;
});

const currentTime = () => {
	let currentMinutes = Math.floor(video.currentTime / 60);
	let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
	let durationMinutes = Math.floor(video.duration / 60);
	let duractionSeconds = Math.floor(video.duration - durationMinutes * 60);

	currentTimeElement.innerHTML = `${currentMinutes}:${currentSeconds < 10 ? "0" + currentSeconds : currentSeconds}`;
	duractionTimeElement.innerHTML = `${durationMinutes}:${duractionSeconds}`;
};

video.addEventListener("timeupdate", currentTime);

video.addEventListener("timeupdate", () => {
	const precentage = (video.currentTime / video.duration) * 100;
	progressBar.style.width = `${precentage}%`;
});

progress.addEventListener("click", (e) => {
	const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = progressTime;
});
