import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovie } from '../../utils/apiHelper';
import useVotes from '../../hooks/useVotes';
import './MovieDetails.css';

import LoadSpinner from '../LoadSpinner/LoadSpinner';

import defaultPoster from '../../assets/default.png';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    upVotes,
    downVotes,
    fetchVotes,
    addUpVote,
    addDownVote
   } = useVotes();

  /** Fetch movie data from OMDB with id parameter */
  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setLoading(true);
        const fetchedMovie = await getMovie(id);
        await fetchVotes(fetchedMovie);
        setMovie(fetchedMovie);
        setLoading(false);
      } catch (e) {
        console.log('ERROR:',e);
      }
    }
    fetchMovieDetails();
  }, [fetchVotes, id]);

  if (loading) {
    return <LoadSpinner />;
  }

  return (
    <div className="MovieDetails">
      <Link to="/" className="back-link">Back</Link>
      <div className="details-wrapper">
        <div className="info">
          <h2>{movie.title}</h2>
          <h3>Release Date</h3>
          <p>{movie.released}</p>
          <h3>Director</h3>
          <p>{movie.director}</p>
          <h3>Starring</h3>
          <p>{movie.actors}</p>
          <h3>Description</h3>
          <p>{movie.description}</p>

          <div className="votes">
            <button
              className="vote-button upvote"
              aria-label="Add Up Vote"
              onClick={() => addUpVote(id)}
            >
              <i className="fa fa-thumbs-up"></i>
              <span>{upVotes}</span>
            </button>
            <button
              className="vote-button downvote"
              aria-label="Add Down Vote"
              onClick={() => addDownVote(id)}
            >
              <i className="fa fa-thumbs-down"></i>
              <span>{downVotes}</span>
            </button>
          </div>
        </div>
        <div className="poster">
          <img
            src={movie.posterUrl === 'N/A' ? defaultPoster : movie.posterUrl}
            alt="Movie Poster"
          />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;