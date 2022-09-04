let films;

function start() {
  films = +prompt("Сколько фильмов просмотрено?");

  while (films == "" || films == null || isNaN(films)) {
    films = +prompt("Сколько фильмов просмотрено?");
  }
}

start();

const movieDB = {
  count: films,
  movies: {},
  actors: {},
  genre: [],
  privat: false,
};

function remember() {
  for (let i = 0; i < 2; i++) {
    const thatMovies = prompt("Последний фильм?").trim();
    const ball = prompt("Оценка?").trim();
    if (
      thatMovies != null &&
      ball != null &&
      thatMovies != "" &&
      ball != "" &&
      thatMovies.length < 50 &&
      ball.length < 50
    ) {
      movieDB.movies[thatMovies] = ball;
    } else {
      i--;
    }
  }
}

remember();

console.log(movieDB);

function level() {
  if (movieDB.count != null && movieDB.count > 0 && movieDB.count != "") {
    if (movieDB.count < 10) {
      console.log("small");
    } else if (movieDB.count < 30) {
      console.log("ok");
    } else if (movieDB.count >= 30) {
      console.log("good");
    }
  } else {
    console.log("error");
  }
}

level();

function privat() {
  if (movieDB.privat === false) {
    console.log("general");
  }
}

privat();

function genre() {
  for (let i = 0; i < 3; i++) {
    const genre = prompt(`Ваш любимый жанр ${i + 1}`);

    if (genre != null && genre != "" && genre.length < 50) {
      movieDB.genre.push(genre);
    } else {
      i--;
    }
  }
}

genre();
