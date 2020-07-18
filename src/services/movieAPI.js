import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const SEARCH_MOVIE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;
const SEARCH_MOVIE_DETAILS_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&i=`;

export const SearchMovieAPI = async (name) => {
  let changAbleUrl = SEARCH_MOVIE_URL + "Harry Potter"; //  fixed result if search is empty
  //validation
  if (name) {
    changAbleUrl = SEARCH_MOVIE_URL + `${name}`;
  }
  const response = await axios
    .get(changAbleUrl)
    .then(({ data }) => data)
    .catch((err) => {
      console.error(err);
    });
  return response;
};

export const SearchMovieDeatilsAPI = async (imdbID) => {
  const response = await axios
    .get(SEARCH_MOVIE_DETAILS_URL + `${imdbID}`)
    .then(({ data }) => data)
    .catch((err) => {
      console.error(err);
    });
  return response;
};
