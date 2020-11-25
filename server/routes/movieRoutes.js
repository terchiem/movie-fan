const express = require('express');
const {
  getMovie,
  createMovie,
  addVote
} = require('../controllers/movieController');

const router = new express.Router();

router.post("/", createMovie);
router.get("/:id", getMovie);
router.patch("/:id/:vote", addVote);

module.exports = router;