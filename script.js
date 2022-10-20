const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};
log("bas", "re", "op", "us");

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}
calcOrDouble(3);
