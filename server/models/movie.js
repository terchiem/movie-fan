const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
    _id: { type: String, required: true },
    title: { type: String, required: true},
    upVote: { type: Number, required: true },
    downVote: { type: Number, required: true },
  }
);

module.exports = mongoose.model('movies', Movie);