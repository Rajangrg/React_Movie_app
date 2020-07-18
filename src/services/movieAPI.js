import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;

export const SearchMovieAPI = async (name) => {
  let searchUrl = URL + "Harry Potter"; //  fixed result in search is empty

  //validation
  if (name) {
    searchUrl = URL + `${name}`;
  }

  const response = await axios
    .get(searchUrl)
    .then(({ data }) => data)
    .catch((err) => {
      console.error(err);
    });
  return response;
};
