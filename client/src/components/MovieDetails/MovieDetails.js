import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovie } from '../../utils/apiHelper';
import './MovieDetails.css';

const TEST_MOVIE = {
  title: 'Test',
  released: '12 Jan 1993',
  director: 'Director',
  actors: 'Actors',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis augue ut enim fermentum lacinia eu a ipsum. Fusce mattis, arcu eu pulvinar maximus, purus mauris efficitur arcu, convallis malesuada justo nulla ac mauris. ',
  posterUrl: 'https://m.media-amazon.com/images/M/MV5BMTVmNDZjNjMtMDZjZi00ODMwLTlhNWQtZDhmZTE4ZjczM2I4XkEyXkFqcGdeQXVyNzgzODI1OTE@._V1_SX300.jpg'
}

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(TEST_MOVIE);
  const [loading, setLoading] = useState(false);

  /** Fetch movie data from OMDB with id parameter */
  // useEffect(() => {
  //   async function fetchMovieDetails() {
  //     try {
  //       setLoading(true);
  //       const fetchedMovie = await getMovie(id);
  //       setMovie(fetchedMovie);
  //       setLoading(false);
  //     } catch (e) {
  //       console.log('ERROR:',e);
  //     }
  //   }
  //   fetchMovieDetails();
  // }, []);

  if (loading) return <div>Loading...</div>

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
            <button className="vote-group">
              <i className="fa fa-thumbs-up"></i>
              <span>100</span>
            </button>
            <button className="vote-group">
              <i className="fa fa-thumbs-down"></i>
              <span>20</span>
            </button>
          </div>
        </div>
        <div className="poster">
          <img src={movie.posterUrl} alt="Movie Poster"/>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails;