import React from 'react';
import './MovieSearch.css';

import SearchBar from '../SearchBar/SearchBar';
import MovieList from '../MovieList/MovieList';

function MovieSearch() {
  return (
    <div className="MovieSearch">
      <SearchBar />
      <MovieList />
    </div>
  )
}

export default MovieSearch;