const movies = require("../movies.json");
const fs = require("fs");

const getMovies = () => {
  return new Promise((resolve, reject) => {
    if (movies.movies.length > 0) resolve(movies.movies);
    else reject("Can't get movies");
  });
};

const addMovie = (movie) => {
  return new Promise(async (resolve, reject) => {
    if (movies.movies.find((m) => m.title === movie.title))
      return reject({ status: 409, message: "Movie already exists" });
    await movies.movies.push(movie);
    fs.writeFile("./movies.json", JSON.stringify(movies), (err) => {
      if (err) reject(err);
      resolve(movie);
    });
  });
};

module.exports = { getMovies, addMovie };
