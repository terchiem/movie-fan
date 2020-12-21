import React from 'react';
import { Link } from 'react-router-dom';
import './TopVotesItem.css';

function TopVotesItem({ movie }) {
  const { _id, title, upVote, downVote } = movie;

  return (
    <li className="TopVotesItem">
      <Link to={`/${_id}`}>{title}</Link>
      <i className="fa fa-thumbs-up"></i>
      <span>{upVote}</span>
      <i className="fa fa-thumbs-down"></i>
      <span>{downVote}</span>
    </li>
  )
}

export default TopVotesItem;