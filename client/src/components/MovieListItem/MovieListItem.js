import React from 'react';
import { Link } from 'react-router-dom';
import './MovieListItem.css';

function MovieListItem({ movie }) {
  const { id, title, year } = movie;

  return (
    <div className="MovieListItem">
      <Link to={`/${id}`}>{title}</Link>
      <span>{year}</span>
    </div>
  )
}

export default MovieListItem;