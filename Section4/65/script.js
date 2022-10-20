// const btn = document.querySelector(".btn");
// let timerId,
//   i = 0;

// function myAnimation() {
//   const elem = document.querySelector(".box");
//   let pos = 0;
//   const id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }
// // timerId = setInterval(logger, 5000);

// btn.addEventListener("click", myAnimation);

// function logger() {
//   if (i === 3) {
//     clearInterval(timerId);
//   }
//   console.log("text");
//   i++;
// }
//-----------------------------
// let user = { name: "Ivan" };
// let map = new WeakMap();
// map.set(user, "data");
// user = null;
// console.log(map);
//-----------------------------
// let cache = new WeakMap();
// function cacheUser(user) {
//   if (!cache.has(user)) {
//     cache.set(user, Date.now());
//   }
//   return cache.get(user);
// }
// let lena = { name: "Elena" };
// let alex = { name: "Alex" };
// cacheUser(lena);
// cacheUser(alex);
// lena = null;
// console.log(cache.has(lena));
// console.log(cache.has(alex));
//------------------Date
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDay());
console.log(now.getDate());
console.log(now.getTime());
