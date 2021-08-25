const moviesService = require("../services/movies.service");

const get10Movies = (req, res) => {
  moviesService
    .get10Movies()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).json(err));
};

const addMovie = (req, res) => {
  const { newMovie } = req.body;
  moviesService
    .addMovie(newMovie)
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      if (err.status && err.message) res.status(err.status).json(err.message);
      else res.status(400).json(err);
    });
};

module.exports = { get10Movies, addMovie };
