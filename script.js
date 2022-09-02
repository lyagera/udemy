const films = +prompt("Сколько фильмов просмотрено?");
const movieDB = {
  count: films,
  movies: {},
  actors: {},
  genre: [],
  privat: false,
};
const thatMovies = prompt("Последний фильм?");
const ball = prompt("Оценка?");
movieDB.movies[thatMovies] = ball;
