const axios = require('axios');
const express = require('express');
const router = new express.Router();
const ExpressError = require('../helpers/expressError');

const OMDB_URL = `http://www.omdbapi.com/?type=movie&apikey=${process.env.OMDB_API_KEY}`;

/**
 * OMDB API call to search for a movie by title
 */

router.get('/search', async (req, res, next) => {
  const { searchTerm } = req.body;

  if (!searchTerm) {
    return next(new ExpressError('Missing search term', 400));
  }

  const searchURL = `${OMDB_URL}&s=${searchTerm}`;
  const result = await axios.get(searchURL);

  // trim extra fields from results
  const movies = result.data.Search
    ? result.data.Search.map(m => {
      return {
        id: m.imdbID,
        title: m.Title,
        year: m.Year
      }
    })
    : [];

  return res.send({ movies });
});

/**
 * OMDB API call to get a movie by id
 */

router.get('/movie', async (req, res, next) => {
  const { id } = req.body;

  if (!id) {
    return next(new ExpressError('Missing movie id', 400));
  }

  const movieURL = `${OMDB_URL}&i=${id}`;
  const result = await axios.get(movieURL);

  if (result.data.Error) {
    return next(new ExpressError('Could not find movie', 404))
  }

  // trim extra fields from result
  const movie = {
    title: result.data.Title,
    released: result.data.Released,
    director: result.data.Director,
    actors: result.data.Actors,
    description: result.data.Plot,
    posterUrl: result.data.Poster
  }

  return res.send({ movie });
});

module.exports = router;