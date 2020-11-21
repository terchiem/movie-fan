const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
    movieId: { type: String, required: true },
    upVote: { type: Number, required: true },
    downVote: { type: Number, required: true },
  }
);

module.exports = mongoose.model('movies', Movie);