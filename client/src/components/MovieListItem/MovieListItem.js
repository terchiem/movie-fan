import React from 'react';
import { Link } from 'react-router-dom';
import './MovieListItem.css';

/** Movie list item which provides a link to its movie details page */

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