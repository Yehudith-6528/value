const uuid = require('uuid');

class Movie {
  constructor(movie) {
    this.id = uuid.v1();
    this.title = movie.title;
    this.category = movie.category;
    this.rating = movie.rating;
    this.image =
      movie.image ||
      "https://images.unsplash.com/photo-1490775696818-7832285c7240?ixid=MnwyMzA2NTl8MHwxfHNlYXJjaHw4fHxhY3Rpb258ZW58MHx8fHwxNjI5OTI4MjE4\u0026ixlib=rb-1.2.1";
  }
}

module.exports = Movie;
