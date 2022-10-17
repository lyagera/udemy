const family = ["Peter", "Ann", "Alex", "Linda"];
console.log(family.length);

function showFamily(arr) {
  console.log(`Семья состоит из: ${family.toString().replaceAll(",", " ")}`);
}

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  for (let i = 0; i < favoriteCities.length; i++) {
    console.log(`${i + 1} | ${favoriteCities[i].toLocaleLowerCase()}`);
  }
}

showFamily(family);
standardizeStrings(favoriteCities);

const someString = "This is some strange string";

function reverse(str) {
  let arr;
  let rev = someString.split("").reverse().join("");
  console.log(rev);

  // if (typeOf someString) != 'string'){
  //     return "Ошибка!";} else {
  //    return someString.reverse();
  // }
}
reverse(someString);
