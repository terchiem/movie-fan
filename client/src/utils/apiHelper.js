import axios from 'axios';

const BASE_URL = 'https://movie-fan-app.herokuapp.com/';
const SEARCH_URL = BASE_URL + 'omdb/search';
const GET_URL = BASE_URL + 'omdb/movie';

/** Search for movies using server's OMDB route */
export const searchMovies = async (searchTerm) => {
  const result = await axios.get(SEARCH_URL, { params: { searchTerm }});
  return result.data.movies;
}

/** Get a movie's details using server's OMDB route */
export const getMovie = async (id) => {
  const result = await axios.get(GET_URL, { params: { id }});
  return result.data.movie;
};

/** Get a movie's votes from the database */
export const getMovieVotes = async (id) => {
  const result = await axios.get(BASE_URL+id);
  return result.data;
}

/** Create a movie entry in the database */
export const createMovieVotes = async (id, title) => {
  const result = await axios.post(BASE_URL, { id, title });
  return result.data;
}

/** Add an upvote to a movie in the database */
export const upVote = async (id) => {
  const result = await axios.patch(BASE_URL+id+'/up');
  return result.data;
}

/** Add a downvote to a movie in the database */
export const downVote = async (id) => {
  const result = await axios.patch(BASE_URL+id+'/down');
  return result.data;
}

/** Get the top 5 movies by upvote and downvote */
export const getTopVotes = async (id) => {
  const result = await axios.get(BASE_URL+'top-votes');
  return result.data;
}

// TODO: ADD ERROR HANDLING
