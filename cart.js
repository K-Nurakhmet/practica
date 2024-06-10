'use strict';

let cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice
  },

  increaseCount(num) {
    this.count += num
  },

  add(name, price, quantity = 1) {
    let allAdd = { name, price, quantity };
    this.items.push(allAdd);
    this.increaseCount(quantity);
    this.calculateItemPrice();
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity
    }, 0)
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));;
    console.log(`Общый стоимость корзины ${this.totalPrice}`);
  },
};

cart.add("Машина", 1000, 1);
cart.add("Мишка", 500, 2);
cart.add("Iphone", 1500, 1);

cart.print();