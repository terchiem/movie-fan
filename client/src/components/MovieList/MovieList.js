import React from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import './MovieList.css';

function MovieList({ movies }) {
  return (
    <div className="MovieList">
      {movies.length > 0 ? (
        <>
          <h3>Results</h3>
          <ul>
            {movies.map(m => <MovieListItem key={m.id} movie={m} />)}
          </ul>
        </>
      ) : (
        <p>No results found! Please enter a new movie title.</p>
      )}
    </div>
  )
}

export default MovieList;