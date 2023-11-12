import axios from 'axios';
const API_KEY = 'c47179d61d62c6159afa6ff918191442';
const BASE_URL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};
export const getMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}trending/movie/day`);
  return data;
};
export const getMovieById = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}`);
  return data;
};

export const getCasts = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/credits`);
  return data;
};
export const getReviews = async movieId => {
  const { data } = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`);
  return data;
};
export const getMoviesbyQuery = async query => {
  const { data } = await axios.get(`${BASE_URL}search/movie?query=${query}`);
  return data;
};
