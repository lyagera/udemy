function fib(x) {
  let fib = [0, 1];
  if (x === 0 || typeof x != "number" || !Number.isInteger(x)) {
    return "";
  } else if (x < 2) {
    return "0";
  } else {
    for (let i = 1; i < x - 1; i++) {
      fib.push(fib[i - 1] + fib[i]);
    }
  }
  return fib.join(" ");
}
