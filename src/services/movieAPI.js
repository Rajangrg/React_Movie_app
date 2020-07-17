import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

export const SearchMovieAPI = async () => {
  const response = await axios
    .get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=harry potter`)
    .then(({ data }) => data)
    .catch((err) => {
      console.error(err);
    });
    return response;
};
