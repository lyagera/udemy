"use strict";

// // const box = document.querySelector(".box");

// // let observer = new MutationObserver((mutationRecords) => {
// //     console.log(mutationRecords);
// // });
// // observer.observe(box, { childList: true });

// // observer.disconnect();

// const num = new Number(3);
// console.log(num);

// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`hello ${this.name}`);
//     }

//     exit() {
//         console.log(`user ${this.name} by`);
//     }
// }

// const ivan = new User("ivan", 28);
// console.log(ivan);
// ivan.hello();
// ivan.exit();

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }
// showThis(3, 2);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + " " + surname);
// }

// const user = { name: "john" };

// sayName.call(user, "Smith");
// sayName.apply(user, ["Gap"]);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// // sayName.bind(user);
// console.log(double(3));

// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     console.log(this);
// });

// const obj = {
//     num: 5,
//     sayNumber: function () {
//         const say = () => {
//             console.log(this);
//         };
//         say();
//     },
// };
// obj.sayNumber();
// const obj1 = {
//     num: 5,
//     sayNumber: () => {
//         const say = () => {
//             console.log(this);
//         };
//         say();
//     },
// };
// obj1.sayNumber();

//-------------------
// 77

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}
const square = new Rectangle(7, 10);
console.log(square.calcArea());

class RectangleColor extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps() {
        console.log(`text: ${this.text}, color: ${this.bgColor}`);
    }
}
const recColor = new RectangleColor(5, 5, "fhgj", "red");
recColor.showMyProps();
console.log(recColor.calcArea());
