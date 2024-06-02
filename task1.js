'use strict';

const randomNumber = (arrLength) => {
  const arrNumber = [];

  for (let i = 0; i < arrLength; i++) {
    arrNumber.push(Math.floor(Math.random() * 100 + 1))
  }
  return arrNumber;

}
console.log(randomNumber(5));