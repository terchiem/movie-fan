const express = require('express');
const {
  getMovie,
  createMovie,
  addVote,
  getTopVotes,
} = require('../controllers/movieController');

const router = new express.Router();

router.post("/", createMovie);
router.get("/:id", getMovie);
router.patch("/:id/:vote", addVote);
router.get("/top-votes/:direction", getTopVotes);

module.exports = router;