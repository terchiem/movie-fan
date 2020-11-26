import axios from 'axios';

const BASE_URL = 'http://localhost:3005/';
const SEARCH_URL = BASE_URL + 'omdb/search';
const GET_URL = BASE_URL + 'omdb/movie';

export const searchMovies = async (searchTerm) => {
  const result = await axios.get(SEARCH_URL, { params: { searchTerm }});
  return result.data.movies;
}

export const getMovie = async (id) => {
  const result = await axios.get(GET_URL, { params: { id }});
  return result.data.movie;
};

export const getMovieVotes = async (id) => {

}