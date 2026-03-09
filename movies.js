const popularMovies = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1&api_key=37153a486788dafbb90b90b4ed4ae4a1";
const searchMovies = "https://api.themoviedb.org/3/search/movie?api_key=37153a486788dafbb90b90b4ed4ae4a1&query=";
const imagePath = "https://image.tmdb.org/t/p/w500";
const main = document.getElementById("main");
const search = document.getElementById("search");
getMovies(popularMovies);

//getting movies
function getMovies(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            showMovies(data.results);
        });
}

//show movies
function showMovies(movies) {
    main.innerHTML = "";
    for (let i = 0; i < movies.length; i++) {

        let movie = movies[i];

        let movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");

        movieDiv.innerHTML =
            "<img src='" + imagePath + movie.poster_path + "'>" +
            "<div class='movie-info'>" +
            "<h3>" + movie.title + "</h3>" +
            "<span>" + movie.vote_average + "</span>" +
            "</div>" +
            "<div class='overview'>" +
            "<h4>Overview</h4>" +
            "<p>" + movie.overview + "</p>" +
            "</div>";

        main.appendChild(movieDiv);

    }
}

search.addEventListener("keyup", function () {
    let searchValue = search.value;
    if (searchValue !== "") {
        getMovies(searchMovies + searchValue);
    }
    else {
        getMovies(popularMovies);
    }
});