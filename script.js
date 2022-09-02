const films = +prompt("Сколько фильмов просмотрено?");
const movieDB = {
  count: films,
  movies: {},
  actors: {},
  genre: [],
  privat: false,
};
const thatMovies1 = prompt("Последний фильм?");
const ball1 = prompt("Оценка?");
const thatMovies2 = prompt("Последний фильм?");
const ball2 = prompt("Оценка?");
movieDB.movies[thatMovies1] = ball1;
movieDB.movies[thatMovies2] = ball2;
