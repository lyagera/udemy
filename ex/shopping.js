const shoppingMallData = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

function isBudgetEnough(data) {
  let square = 0;
  for (let key in data.shops) {
    console.log(data.shops[key]);

    square += data.shops[key].width * data.shops[key].length;
  }
  console.log("asd " + square);
  //   let volume = 0;
  //   volume = square * shoppingMallData.height;
  //   console.log("vol " + volume);
  console.log(square * data.height * data.moneyPer1m3);
  console.log(data.budget);

  if (data.budget > square * data.height * data.moneyPer1m3) {
    return "Бюджета достаточно";
  } else {
    return "Бюджета недостаточно";
  }
}

//   return perimeter;

console.log(isBudgetEnough(shoppingMallData));

// выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'.
