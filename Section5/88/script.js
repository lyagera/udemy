const names = ["ivan", "ann", "ksenia", "voldemart"];
const shortNames = names.filter(function (name) {
    return name.length < 5;
});
console.log(shortNames, names);
//map

let answers = ["IvAn", "AnnA", "HellO"];
// answers = answers.map((item) => item.toLowerCase());
// console.log(answers);
const result = answers.map((item) => item.toLowerCase());
console.log(result);
const some = [4, 5, 5];
console.log(some.some((item) => typeof item === "number")); //хотя бы 1
console.log(some.every((item) => typeof item === "number")); //все

const arr = [1, 2, 4, 5, 6, 7];
const res = arr.reduce((sum, current) => sum + current);
console.log(res);
const str = ["apple", "pear", "plum"];
const string = str.reduce((sum, current) => `${sum}, ${current}`);
console.log(string);

const arr1 = [5, 1, 2, 4, 5, 6, 7];
const res1 = arr1.reduce((sum, current) => sum + current, 3);
console.log(res1);

const obj = {
    ivan: "persone",
    ann: "persone",
    dog: "animal",
    cat: "animal",
};
const newArr = Object.entries(obj)
    .filter((item) => item[1] === "persone")
    .map((item) => item[0]);
console.log("newArr" + newArr);

//88-------------20
const films = [
    {
        name: "Titanic",
        rating: 9,
    },
    {
        name: "Die hard 5",
        rating: 5,
    },
    {
        name: "Matrix",
        rating: 8,
    },
    {
        name: "Some bad film",
        rating: 4,
    },
];

console.log(newArr);
function showGoodFilms(arr) {
    const newFilms = arr.filter(function (item) {
        if (item.rating >= 8) {
            return item;
        }
    });
    return newFilms;
}
console.log(showGoodFilms(films));
// .filter((item) => item[0] > 8)
// .map((item) => item[1]);
//
function showListOfFilms(arr) {
    const listFilms = arr
        .map((item) => item.name)
        .reduce((sum, current) => `${sum}, ${current}`);
    return listFilms;
}
console.log(showListOfFilms(films));
function setFilmsIds(arr) {
    const setFilms = arr.map((item, i) => {
        item.id = i;
        // console.log(item);
        return item;
    });

    // console.log(setFilms.id);

    return setFilms;
}

// setFilmsIds(films);
console.log(setFilmsIds(films));

const transformedArray = setFilmsIds(films);

function checkFilms(arr) {
    const check = arr.every((item) => {
        console.log(item.hasOwnProperty("id"));

        return item.hasOwnProperty("id");
    });
    console.log(check);

    return check;
}
console.log(checkFilms(transformedArray));

// console.log(some.every((item) => typeof item === "number")); //все
//88-------------21
const funds = [
    { amount: -1400 },
    { amount: 2400 },
    { amount: -1000 },
    { amount: 500 },
    { amount: 10400 },
    { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
    const positiveArr = data
        .filter(function (item) {
            if (item.amount > 0) {
                return item;
            }
        })
        .map((item) => {
            return Object.values(item);
        });

    return positiveArr.reduce((sum, current) => Number(sum) + Number(current));
};

console.log(getPositiveIncomeAmount(funds));
// const res = arr.reduce((sum, current) => sum + current);
const getTotalIncomeAmount = (data) => {
    if (data.some((item) => item.amount < 0)) {
        const total = data.map((item) => {
            return Object.values(item);
        });
        console.log(total);

        return total.reduce((sum, current) => Number(sum) + Number(current));
    } else {
        getPositiveIncomeAmount();
    }
};
console.log(getTotalIncomeAmount(funds));
