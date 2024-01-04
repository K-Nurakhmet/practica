'use strict';

const productBuy = prompt('Что вы хотите купить для ребёнка?');
const goodsCount = 1;
const productsCategory = 'Игровой приставку, игрушки, мишки, машины';
const goodsPrice = 5000;
const selectCategory = productsCategory.slice(0, 17)

console.log(typeof goodsCount, typeof goodsPrice)
console.log(`${selectCategory} ${productBuy} ${goodsCount} штук.Общий сумма товара: ${goodsPrice}$`);