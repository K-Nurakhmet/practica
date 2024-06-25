'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  increaseCount(num) {
    this.count += num;
  },

  add(name, price, quantity = 1) {
    this.items.push({name, price, quantity});
    this.increaseCount(quantity);
  },

  calculateItemPrice() {
    return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },

  get totalPrice() {
    return this.calculateItemPrice();
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    console.log(`Общый стоимость корзины ${this.totalPrice}`);
  },
};

cart.add('Машина', 1000, 1);
cart.add('Мишка', 500, 2);
cart.add('Iphone', 1500, 1);

cart.print();
