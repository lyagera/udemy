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
console.log(persone.userAge);

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = "Ptrychenko";

    get surname() {
        return this.#surname;
    }
    set surname(name) {
        this.#surname = name;
    }

    say() {
        console.log(`name: ${this.name}, age ${this._age}`);
    }
    getAge() {
        return this._age;
    }
    setAge(age) {
        if (typeof age === "number" && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log("error data");
        }
    }
}
const ivan = new User("Ivan", 27);
console.log(ivan.name);

ivan.age = 99;

console.log(ivan.age);

ivan.say();
