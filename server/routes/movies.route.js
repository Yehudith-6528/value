
const express = require('express');
const router = express.Router();
const moviesController= require('../controllers/movies.controller')

router.get('/movies/getMovies', moviesController.getMovies)
router.post('/movies/addMovie', moviesController.addMovie)

module.exports = router;