const moviesService = require("../services/movies.service");

const getMovies = (req, res) => {
  moviesService
    .getMovies()
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(400).json(err));
};

const addMovie = (req, res) => {
  console.log(req);
  const { newMovie } = req.body;
  console.log(newMovie);

  moviesService
    .addMovie(newMovie)
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      if (err.status && err.message) res.status(err.status).json(err.message);
      else res.status(400).json(err);
    });
};

module.exports = { getMovies, addMovie };
