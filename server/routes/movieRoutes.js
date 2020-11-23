const express = require('express');
const {
  getMovie,
  createMovie,
  addVote
} = require('../controllers/movieController');

const router = new express.Router();

router.get("/:id", getMovie);
router.post("/:id", createMovie);
router.patch("/:id/:vote", addVote);

module.exports = router;