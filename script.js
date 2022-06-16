const imageBaseUrl = 'https://image.tmdb.org/t/p'
const apiKey = "7801510f3800dd1b6ec7e4d9f68f06c9";
const basePopularRequest = "https://api.themoviedb.org/3/movie/popular?api_key=";
const basePopularEnd = "&language=en-US&page=";

const searchFirst = "https://api.themoviedb.org/3/search/movie?api_key=";
const searchSecond = "&language=en-US&query="
const searchThird = "&page="
const searchFourth =  "&include_adult=false"

var searchMode = false;

var page = 1;
var searchStr;

const movieGridElement = document.querySelector(".movies-grid");
const moviesLoaded = document.querySelector("#movies-loaded");
const loadMoreButton = document.querySelector("#load-more-movies-btn");
const searchBar = document.querySelector("#search-input");
var numMovies = 0;

async function loadMovies(movieGridElement, results) {
    console.log('results: ', results);
    var data = results["results"];
    console.log('data: ', data);
    for(var i = 0; i < data.length; i++) {
        var movie = data[i];
        movieGridElement.innerHTML +=
        `<div class="movie-card">
            <img class="movie-poster" src="${imageBaseUrl}/w342${movie.poster_path}" alt="${movie.title}" title="${movie.title}"/>
            <div class="movie-title">${movie.title}</div>
            <div class="movie-votes">Votes: ${movie.vote_average}</div>
        </div>`;
        numMovies++;
    }
    moviesLoaded.innerHTML = `<h3>${numMovies} Movies Loaded</h3>`;
}

async function fetchMovies(movieGridElement) {
    try {
        const response = await fetch(basePopularRequest + apiKey + basePopularEnd + page);
        console.log('basePopularRequest + apiKey + basePopularEnd + page: ', basePopularRequest + apiKey + basePopularEnd + page);
        const results = await response.json();
        console.log('results: ', results);
        page++;
        loadMovies(movieGridElement, results);
    }
    catch (error) {
        movieGridElement.innerHTML += `<div class="error">${error}</div>`;
    }
}

function resetValues() {
    numMovies = 0;
    page = 1;
    movieGridElement.innerHTML = "";
}

async function filterMovies(movieGridElement, str) {
    console.log(str);
    searchMode = true;
    try {
        const response = await fetch(searchFirst + apiKey + searchSecond + str + searchThird + page + searchFourth);
        console.log('searchFirst + apiKey + searchSecond + str + searchThird + page + searchFourth: ', searchFirst + apiKey + searchSecond + str + searchThird + page + searchFourth);
        const results = await response.json();
        page++;
        loadMovies(movieGridElement, results);
    }
    catch (error) {
        movieGridElement.innerHTML += `<div class="error">${error}</div>`;
    }
}

function addEventListeners(loadMoreButton, searchBar, movieGridElement) {
    loadMoreButton.addEventListener("click", function () {
        if(!searchMode) fetchMovies(movieGridElement); 
        else  {
            filterMovies(movieGridElement, searchStr);
        }
    }, false);
    searchBar.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        searchStr = document.querySelector("#search-input").value;
        resetValues();
        filterMovies(movieGridElement, searchStr);
    }
});
}



window.onload = function () {
    // execute your functions here to make sure they run as soon as the page loads
    //loadMoreMovies(movieGridElement, movies, moviesLoadedPerClick);
    addEventListeners(loadMoreButton, searchBar, movieGridElement);
    fetchMovies(movieGridElement);
  }