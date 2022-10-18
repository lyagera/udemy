const btns = document.querySelectorAll("button");
const overlay = document.querySelector(".overlay");
// btn.onclick = function () {
//   alert("click");
// };
// btn.addEventListener("click", () => {
//   alert("click");
// });
// btn.addEventListener("click", () => {
//   alert("Second click");
// });
// let i = 0;
const deleteElement = (event) => {
  // alert("Hover");
  console.log(event.currentTarget);
  console.log(event.type);
  // event.target.remove();
  // if (i === 1) {
  //   btn.removeEventListener("click", deleteElement);
  // }
};
// btn.addEventListener("mouseenter", deleteElement);
// btn.addEventListener("click", deleteElement);
// overlay.addEventListener("click", deleteElement);
btns.forEach((btn) => {
  btn.addEventListener("click", deleteElement, { once: true });
});
const link = document.querySelector("a");
link.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(event.target);
});
