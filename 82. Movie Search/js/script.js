//https://imdb-api.com/en/API/Search/k_23bndbs0/batman
// https://imdb-api.com/en/API/Title/k_23bndbs0/tt0103359/FullActor

const movieSearchBox = document.getElementById("movie-search-box");
const searchList = document.getElementById("search-list");
const resultGrid = document.getElementById("result-grid");

async function loadMovies(searchTerm) {
	const URL = `https://imdb-api.com/en/API/Search/k_23bndbs0/${searchTerm}`;
	const res = await fetch(`${URL}`);
	const data = await res.json();
	if (data) displayeMovieList(data.results);
}

function findMovies() {
	let searchItem = movieSearchBox.value.trim();

	if (searchItem.length > 0) {
		searchList.classList.remove("hide-search-list");

		loadMovies(searchItem);
	} else searchList.classList.add("hide-search-list");
}

function displayeMovieList(movies) {
	searchList.innerHTML = "";
	for (let i = 0; i < movies.length; i++) {
		let movieListItem = document.createElement("div");

		movieListItem.dataset.id = movies[i].id;
		movieListItem.classList.add("search-list-item");
		movieListItem.innerHTML = `
      <div class="search-item-thumbnail">
          <img src="${movies[i].image}" alt="">
        </div>
        <div class="search-item-info">
          <h3>${movies[i].title}</h3>
          <p>${movies[i].description}</p>
      </div>`;

		searchList.appendChild(movieListItem);
	}

	loadMovieDetails();
}

function loadMovieDetails() {
	const searchListMovie = searchList.querySelectorAll(".search-list-item");

	searchListMovie.forEach((movie) => {
		movie.addEventListener("click", async () => {
			searchList.classList.add("hide-search-list");

			movieSearchBox.value = "";

			const result = await fetch(`https://imdb-api.com/en/API/Title/k_23bndbs0/${movie.dataset.id}/FullActor`);
			const movieDetails = await result.json();

			displayMovieDetaile(movieDetails);
			console.log(movieDetails);
		});
	});
}

function displayMovieDetaile(details) {
	resultGrid.innerHTML = `
      <div class="movie-wrapper">
        <img src="${details.image}" alt="">
      </div>
      <div class="movie-info">
        <h3 class="movie-title">
          ${details.fullTitle}
        </h3>
        <ul class="movie-misc-info">
          <li class="years">Year :  ${details.year}</li>
          <li class="rated">Rating : ${details.contentRating}</li>
          <li class="released">Realeased :  ${details.releaseDate}</li>
        </ul>
        <p class="genre">${details.genres}</p>
        <p class="writer"><b>Writer:</b>${details.writers}</p>
        <p class="actors"><b>Actors:</b>Chris Pratt, Zoe Saldana</p>
        <p class="plot">${details.plot}</p>
        <p class="language"><b>language:</b>${details.languages}</p>
        <p class="awards"><b><i class="fas fa-award"></i></b>${details.awards}</p>
      </div>
     `;
}
