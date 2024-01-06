'use strict';

const productName = prompt('Что вы хотите купить?', 'PS5, XBOX');
const goodsCount = +prompt('Сколько штук вам надо?', '');
const productsCategory = prompt('Из какой категорий?');
const goodsPrice = parseInt(prompt('Сумма товара', 5000));

console.log(typeof goodsCount, typeof goodsPrice);
console.log(`${productsCategory} ${productName} ${goodsCount} штук.Общий сумма товара: ${goodsPrice * goodsCount}$`);