const obj = {
  a: 5,
  b: 1,
};
const copy = obj;
copy.a = 10;
console.log(obj);

function copyObj(main) {
  let copyObj = {};
  let key;
  for (key in main) {
    copyObj[key] = main[key];
  }
  return copyObj;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4,
  },
};

const newNumber = copyObj(numbers);
newNumber.a = 5;
newNumber.c.x = 5;

console.log(newNumber);
console.log(numbers);
const add = {
  d: 15,
  c: 20,
};
const clone = Object.assign({}, add);
clone.d = 25;
console.log(add);
console.log(clone);

const arr = [1, 2, 3, 4];
const arr1 = arr.slice();
arr1[1] = 4321;
console.log(arr);
console.log(arr1);

const video = ["asd", "fgh", "jkl"];
const blogs = ["qwe", "rty", "uio"];
const inter = [...video, ...blogs, "zxc", "vbn", "mko"];

function log(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
const num = [2, 5, 8];
log(...num);

const q = {
  a: 1,
  b: 2,
};
const nq = { ...q };

console.log(nq);
