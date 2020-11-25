import React from 'react';
import MovieListItem from '../MovieListItem/MovieListItem';
import './MovieList.css';



const TEST_MOVIES = [
  { id: 1, title: 'movie 1', year: 2000 },
  { id: 2, title: 'movie 2', year: 2010 },
  { id: 3, title: 'movie 3', year: 'N/A' },
]

function MovieList({ movies }) {
  return (
    <div className="MovieList">
      <ul>
        {TEST_MOVIES.map(m => <MovieListItem key={m.id} movie={m} />)}
      </ul>
    </div>
  )
}

export default MovieList;