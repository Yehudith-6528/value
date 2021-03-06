const Movie = require("../models/movie.model");
const repository = require("../repositories/repository");

const getMovies = () => {
  return new Promise((resolve, reject) => {
    repository
      .getMovies()
      .then((movies) => {
        movies = movies.sort((a, b) => b.rating - a.rating).slice(0,10);
        resolve(movies);
      })
      .catch((err) => reject(err));
  });
};

const addMovie = (newMovie) => {
  return new Promise((resolve, reject) => {
    let movie= new Movie(newMovie);
    debugger;
    repository
      .addMovie(movie)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
module.exports = { getMovies, addMovie };
