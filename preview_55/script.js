// "use strict";

// const boxesQuery = document.querySelectorAll(".box");
// const boxesGet = document.getElementsByClassName("box");

// boxesQuery.forEach((box) => {
//   if (box.matches(".this")) {
//     console.log("This");
//   }
// });

// console.log(boxesQuery[0].closest(".wrapper"));

// // boxesQuery[0].remove();
// // boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//   const div = document.createElement("div");
//   div.classList.add("box");
//   document.body.append(div);
// }

// // console.log(boxesQuery);
// // console.log(boxesGet);
// // console.log(document.body.children);

// // console.log(Array.from(boxesGet));

// const salaries = {
//   john: 500,
//   ivan: 1000,
//   ann: 5000,
//   sayHello: function () {
//     console.log("Hello");
//   },
// };
// salaries[Symbol.iterator] = function () {
//   return {
//     current: this.john,
//     last: this.ann,
//     next() {
//       // done: true, value: 123
//     },
//   };
// };
//-------------------------
// function amountOfPages(summary) {
//   const arr = [];

//   for (let i = 1; arr.join("").length < summary; i++) {
//     arr.push(i);
//     //console.log(arr.join("").length);
//   }

//   return arr.length;
// }
// console.log(amountOfPages(185));
//---------------------------
// function isPangram(string) {
//   for (let i = 65; i < 91; i++) {
//     let stringNew = "";
//     // console.log(String.fromCodePoint(i));

//     if (string.toUpperCase().includes(String.fromCodePoint(i))) {
//       //   console.log("true");
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPangram("The quick barown fox jumps over the lazy dog"));
//------------------------------

// function deepCount(a) {
//   a.forEach((element) => console.log(element));
// }
let count = 0;
function deepCount(a) {
  a.forEach((element) => {
    count += 1;
    if (Array.isArray(element)) {
      deepCount(element);
    }
  });
  return count;
}
console.log(deepCount([]));
