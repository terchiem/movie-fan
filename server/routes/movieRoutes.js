const express = require('express');
const {
  getMovie,
  createMovie,
  addVote,
  getTopVotes,
} = require('../controllers/movieController');

const router = new express.Router();

router.post("/", createMovie);
router.get("/top-votes", getTopVotes);
router.get("/:id", getMovie);
router.patch("/:id/:vote", addVote);

module.exports = router;