import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovie } from '../../utils/apiHelper';
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  /** Fetch movie data from OMDB with id parameter */
  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setLoading(true);
        const fetchedMovie = await getMovie(id);
        setMovie(fetchedMovie);
        setLoading(false);
      } catch (e) {
        console.log('ERROR:',e);
      }
    }
    fetchMovieDetails();
  }, []);

  if (loading) return <div>Loading...</div>

  return (
    <div className="MovieDetails">
      <Link to="/">Back</Link>
      <h2>{movie.title}</h2>
      <p>{movie.released}</p>
      <p>{movie.director}</p>
      <p>{movie.actors}</p>
      <p>{movie.description}</p>
      <img src={movie.posterUrl} alt="Movie Poster"/>
    </div>
  )
}

export default MovieDetails;