
const express = require('express');
const router = express.Router();
const moviesController= require('../controllers/movies.controller')

router.get('/movies/get10Movies', moviesController.get10Movies)
router.post('/movies/addMovie', moviesController.addMovie)

module.exports = router;