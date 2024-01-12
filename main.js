'use strict';

const productName = prompt("Что вы хотите купить?", "PS5, XBOX");
const goodsCount = +prompt("Сколько штук вам надо?");
const productsCategory = ("Игровой приставка");
const goodsPrice = 5000;

if (goodsCount > 0) {                           // Если больше 0, Ваш товар готов //
  console.log("Ваш товар будет готов!");
} else if (goodsCount < 0) {                    // Если ниже 0 -1, Вы ввели не правильно //
  console.log("Вы ввели не правильно");
} else if (Number.isNaN(goodsCount)) {          // Если не ввели цифры, Вы ввели некорректные данные //
  console.log("Вы ввели некорректные данные");
} else {                                        // Если 0, Вы точно не хотите купить? //
  console.log("Вы точно не хотите купить?");
}


console.log(typeof goodsCount, typeof goodsPrice);
console.log(`${productsCategory} ${productName} ${goodsCount} штук.Общий сумма товара: ${goodsPrice * goodsCount}$`);