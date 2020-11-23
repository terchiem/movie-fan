const Movie = require('../models/movie');
const ExpressError = require('../helpers/expressError');

/**
 * GET /:id
 * Gets a single movie
 */

const getMovie = async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    next(new ExpressError('Could not find movie', 404));
  }

  return res.send(movie);
}

/**
 * POST /:id
 * Creates a new movie
 */

const createMovie = async (req, res, next) => {
  try {
    const newMovie = new Movie({
      _id: req.params.id,
      upVote: 0,
      downVote: 0
    });

    await newMovie.save();
    return res.send(newMovie);
  } catch (e) {
    return next(new ExpressError('Could not create movie', 400));
  }
}

/**
 * PATCH /:id/:vote
 * Adds a up/down vote to a movie
 */

const addVote = async (req, res, next) => {
  const VOTES = {
    up: 'upVote',
    down: 'downVote'
  }

  const vote = VOTES[req.params.vote];

  if (!vote) {
    next(new ExpressError(`Invalid 'vote' parameter`, 400));
  }

  const movie = await Movie.findByIdAndUpdate(req.params.id, {
    $inc: {
      [vote]: 1
    }
  });

  if (!movie) {
    next(new ExpressError('Could not update movie', 400));
  }

  return res.send(movie);
}

module.exports = {
  getMovie,
  createMovie,
  addVote,
}