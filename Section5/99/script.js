const persone = {
    name: "Alex",
    age: 25,
    get userAge() {
        return this.age;
    },
    set userAge(num) {
        this.age = num;
    },
};
persone.userAge = 30;
console.log(persone.userAge);
console.log("qqq " + persone.age);

function User(name, age) {
    this.name = name;
    let userAge = age;
    this.say = function () {
        console.log(`name: ${this.name}, age ${userAge}`);
    };
    this.getAge = function () {
        return userAge;
    };
    this.setAge = function (age) {
        if (typeof age === "number" && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log("error data");
        }
    };
}
const ivan = new User("Ivan", 27);
console.log(ivan.name);
console.log(ivan.getAge());
ivan.setAge(30);

ivan.setAge(300);
console.log(ivan.getAge());
console.log(ivan);

ivan.say();
