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
  const result = await axios.get(BASE_URL+id);
  return result.data;
}

export const createMovieVotes = async (id, title) => {
  const result = await axios.post(BASE_URL, { id, title });
  return result.data;
}

export const upVote = async (id) => {
  const result = await axios.patch(BASE_URL+id+'/up');
  return result.data;
}

export const downVote = async (id) => {
  const result = await axios.patch(BASE_URL+id+'/down');
  return result.data;
}

// TODO: ADD ERROR HANDLING
