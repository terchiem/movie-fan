import React from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import './MovieList.css';

function MovieList({ movies }) {
  return (
    <div className="MovieList">
      <ul>
        {movies.map(m => <MovieListItem key={m.id} movie={m} />)}
      </ul>
    </div>
  )
}

export default MovieList;