function calculateVolumeAndArea(length) {
  console.log(Number.isInteger(length));
  if (
    length == "" ||
    length == null ||
    typeof length != "number" ||
    !Number.isInteger(length) ||
    length < 0
  ) {
    console.log("При вычислении произошла ошибка");
  } else {
    const v = length * length * length;
    const s = length * length * 6;
    console.log(`Объем куба: ${v}, площадь всей поверхности: ${s}`);
  }
}
calculateVolumeAndArea(-5);

function getTimeFromMinutes(minutes) {
  let minute = minutes % 60;
  console.log(minutes % 60);

  let hour = (minutes - minute) / 60;
  if (minutes < 0 || minutes > 600 || !Number.isInteger(minutes)) {
    console.log("Ошибка, проверьте данные");
  } else if (hour === 1) {
    console.log(`Это ${hour} час и ${minute} минут`);
  } else if (hour > 1 && hour < 5) {
    console.log(`Это ${hour} часа и ${minute} минут`);
  } else {
    console.log(`Это ${hour} часов и ${minute} минут`);
  }
}
getTimeFromMinutes(120);

function findMaxNumber(a, b, c, d) {
  if (
    typeof a != "number" ||
    typeof b != "number" ||
    typeof c != "number" ||
    typeof d != "number" ||
    a === undefined ||
    b === undefined ||
    c === undefined ||
    d === undefined
  ) {
    console.log(0);
  } else {
    console.log(Math.max(a, b, c, d));
  }
}
findMaxNumber(5, 11, 1, 7);
