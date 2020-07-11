const myKey = "24c3b1888c764b51936f1dc0e246d6d8";
const baseUrl = "https://api.themoviedb.org/3/";
const path_tmdb = "https://image.tmdb.org/t/p";
const no_poster =
  "https://moviereelist.com/wp-content/uploads/2019/07/poster-placeholder.jpg";
const no_image =
  "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg";

function fetchTrendingMovies() {
  return fetch(`${baseUrl}trending/movie/day?api_key=${myKey}`)
    .then((resp) => resp.json())
    .then((data) => data.results)
    .catch((err) => console.log(err));
}

function fetchMoviesWithQuery(query) {
  return fetch(
    `${baseUrl}search/movie?api_key=${myKey}&query=${query}&language=en-US&page=1&include_adult=false`
  )
    .then((resp) => resp.json())
    .then((data) => data.results)
    .catch((err) => console.log(err));
}

function fetchMovieDetails(movieId) {
  return fetch(`${baseUrl}movie/${movieId}?api_key=${myKey}&language=en-US`)
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
}

function fetchMovieCast(movieId) {
  return fetch(`${baseUrl}movie/${movieId}/credits?api_key=${myKey}`)
    .then((resp) => resp.json())
    .then((data) => data.cast)
    .catch((err) => console.log(err));
}

function fetchMovieReviews(movieId) {
  return fetch(
    `${baseUrl}movie/${movieId}/reviews?api_key=${myKey}&language=en-US&page=1`
  )
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
}

export default {
  path_tmdb,
  no_poster,
  no_image,
  fetchTrendingMovies,
  fetchMoviesWithQuery,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};
