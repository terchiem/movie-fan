import React from 'react';
import './MovieSearch.css';

import SearchBar from '../SearchBar/SearchBar';

function MovieSearch() {
  return (
    <div className="MovieSearch">
      <SearchBar />

      <p>I'm the movie list</p>
    </div>
  )
}

export default MovieSearch;