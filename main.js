'use strict';

const productBuy = prompt('Что вы хотите купить?', 'Для ребёнка');
const goodsCount = Math.random();
const productsCategory = "Фрукты, Одежду, Телевизор, Игровой приставку, Машину, Игрушку";
const goodsPrice = Math.min(100, 236, 1000, 56, 40);
const selectCategory = productsCategory.slice(54, 61)

console.log(typeof goodsCount, typeof goodsPrice)
console.log(`${productBuy} ${parseInt(goodsCount * 100)} штук ${selectCategory.toLowerCase()}. Общий сумма товара: ${parseInt(goodsCount * 100) * goodsPrice}$`);