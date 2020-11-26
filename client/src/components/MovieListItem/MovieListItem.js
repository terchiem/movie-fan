import React from 'react';
import { Link } from 'react-router-dom';
import './MovieListItem.css';

function MovieListItem({ movie }) {
  const { id, title, year } = movie;

  return (
    <li className="MovieListItem">
      <Link to={`/${id}`}>{title}</Link>
      <span>{year}</span>
    </li>
  )
}

export default MovieListItem;