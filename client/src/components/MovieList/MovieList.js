import React from 'react';
import './MovieList.css';

import MovieListItem from '../MovieListItem/MovieListItem';
import LoadSpinner from '../LoadSpinner/LoadSpinner';

/** Displays a list of MovieListItem components from an array of movies */

function MovieList({ movies, loading }) {
  if (loading) {
    return <LoadSpinner />;
  }

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