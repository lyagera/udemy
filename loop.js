// const data = [5, 10, "Shopping", 20, "Homework"];
// const result = [];
// const len = data.length - 1;
// // Пишем решение вот тут
// for (let i = len; i >= 0; i--) {
//   result.push(data[i]);
// }

// console.log(result);

// let a = "";
// let b = 5;
// for (let i = 1; i < 2 * b; i += 2) {
//   for (let k = b - (i / 2 + 0.5); k > 0; k--) {
//     a += " ";
//   }
//   for (let j = 0; j < i; j++) {
//     a += "*";
//   }
//   a += "\n";
// }
// console.log(a);
// ------------------------------------
const films = +prompt("Сколько фильмов просмотрено?");
const movieDB = {
  count: films,
  movies: {},
  actors: {},
  genre: [],
  privat: false,
};
// const thatMovies1 = prompt("Последний фильм?");
// const ball1 = prompt("Оценка?");
// const thatMovies2 = prompt("Последний фильм?");
// const ball2 = prompt("Оценка?");
// movieDB.movies[thatMovies1] = ball1;
// movieDB.movies[thatMovies2] = ball2;
// -----------------------------------
// for (let i = 0; i < 2; i++) {
//   const thatMovies = prompt("Последний фильм?");
//   const ball = prompt("Оценка?");
//   if (
//     thatMovies != null &&
//     ball != null &&
//     thatMovies != "" &&
//     ball != "" &&
//     thatMovies.length < 50 &&
//     ball.length < 50
//   ) {
//     movieDB.movies[thatMovies] = ball;
//   } else {
//     i--;
//   }
// }
// console.log(movieDB);
// ----------------------------------
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
