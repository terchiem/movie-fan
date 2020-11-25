import React, { useState } from 'react';
import axios from 'axios';
import { OMDB } from '../../utils/apiPaths';
import './MovieSearch.css';

import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';

const TEST_MOVIES = [
  { id: 1, title: 'movie 1', year: 2000 },
  { id: 2, title: 'movie 2', year: 2010 },
  { id: 3, title: 'movie 3', year: 'N/A' },
]

function MovieSearch() {
  const [movies, setMovies] = useState(TEST_MOVIES);
  const [loading, setLoading] = useState(false);

  const search = async (searchTerm) => {
    setLoading(true);
    const result = await axios.get(OMDB.search, { params: { searchTerm }});
    setMovies(result.data.movies);
    setLoading(false);
  }

  return (
    <div className="MovieSearch">
      <SearchBar search={search} />

      {
        loading
          ? <div>Loading...</div>
          : <MovieList movies={movies} />
      }

    </div>
  )
}

export default MovieSearch;