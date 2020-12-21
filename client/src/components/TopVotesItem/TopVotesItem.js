import React from 'react';
import { Link } from 'react-router-dom';
import './TopVotesItem.css';

function TopVotesItem({ movie }) {
  const { _id, title, upVote, downVote } = movie;

  return (
    <li className="TopVotesItem">
      <Link to={`/${_id}`}>{title}</Link>
      <div className="TopVotesItem-votes">
        <div className="TopVotesItem-votegroup up">
          <i className="fa fa-thumbs-up"></i>
          <span>{upVote}</span>
        </div>
        <div className="TopVotesItem-votegroup down">
          <i className="fa fa-thumbs-down"></i>
          <span>{downVote}</span>
        </div>
      </div>
    </li>
  )
}

export default TopVotesItem;