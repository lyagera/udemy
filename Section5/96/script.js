// new RegExp("pattern", "flags");
// /pattern/flags
// const ans = prompt("enter your name");
// const reg = /\d/g;
// console.log(reg.test(ans));
// // console.log(ans.search(reg));
// console.log(ans.match(reg));
// // \d - ищем цифру \D - не цифра
// // \w - ищем слова(буквы) \W - не буква
// // \s - ищем пробелы
// // i - независимо от регистра
// // g - все вхождения
// // m - многострочный режим
// const pass = prompt("password");
// console.log(pass.replace(/\./g, "*"));
// const str = "my name r2D2";
// console.log(str.match(/\w\d\w\d/i));
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("foo");
//     }, 300);
// });

// promise.then((value) => {
//     console.log(value);
// });
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "one");
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, "two");
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "three");
// });
// const p4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 4000, "four");
// });
// const p5 = new Promise((resolve, reject) => {
//     reject("reject");
// });

// Promise.all([p1, p2, p3, p4, p5]).then(
//     (value) => {
//         console.log(value);
//     },
//     (reason) => {
//         console.log(reason);
//     }
// );
// const promisify = (item, delay) =>
//     new Promise((resolve) => setTimeout(() => resolve(item), delay));

// const a = () => promisify("a", 100);
// const b = () => promisify("b", 5000);
// const c = () => promisify("c", 3000);

// async function two() {
//     const promises = [a(), b(), c()];
//     const outpu1 = await Promise.race(promises);
//     return `two is done: ${outpu1}`;
// }

// two().then(console.log);
const promisify = (item, delay) =>
    new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`;
}

three().then(console.log);
