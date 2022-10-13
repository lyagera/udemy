// 'use strict';

const box = document.getElementById("box");
// console.log(box);
const button = document.getElementsByTagName("button");
// console.log(button[1]);
const circles = document.getElementsByClassName("circle");
// console.log(circles);
const hearts = document.querySelectorAll(".heart");
// console.log(hearts);
// hearts.forEach((item) => {
//   console.log(item);
// });
const oneHeart = document.querySelector(".heart");
// console.log(oneHeart);
console.dir(box);
// box.style.backgroundColor = "blue";
// box.style.width = "500px";
button[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";
box.style.cssText = "background-color: blue; width: 500px";
// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = "blue";
// }
hearts.forEach((item) => {
  item.style.backgroundColor = "blue";
});
const div = document.createElement("div");
const text = document.createTextNode("ugfyt f7ytr ytf 6");
div.classList.add("black");
// document.body.append(div);
const wrapper = document.querySelector(".wrapper");
console.log(wrapper);

wrapper.prepend(div);
hearts[0].after(div);
wrapper.insertBefore(div, hearts[0]);
circles[1].remove();
hearts[1].replaceWith(circles[0]);
wrapper.replaceChild(circles[0], hearts[0]);
div.innerHTML = "<h1>Hello World</h1>";
// div.textContent = "Hello";
div.insertAdjacentHTML("beforebegin", "<h2>Hello</h2>");
