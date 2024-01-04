'use strict';

const productBuy = prompt('Что вы хотите купить для ребёнка?');
const goodsCount = 1;
const productsCategory = 'Игровой приставки, игрушки, мишки, машины';
const goodsPrice = 5000;
const selectCategory = productsCategory.slice(54, 61)

console.log(typeof goodsCount, typeof goodsPrice)
console.log(`${productBuy} ${goodsCount} штук. ${selectCategory.toLowerCase()} Общий сумма товара: ${goodsPrice}$`);