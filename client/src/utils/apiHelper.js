import axios from 'axios';

const BASE_URL = 'http://localhost:3005/';
const GET_URL = BASE_URL + 'omdb/movie';

export const getMovie = async (id) => {
  const result = await axios.get(GET_URL, { params: { id }});
  return result.data.movie;
};

export const getMovieVotes = async (id) => {

}