'use strict';

const randomNumber = (arrLength, max, min) => {
  const arrNumber = [];

  for (let i = 0; i < arrLength; i++) {
    arrNumber.push(Math.floor(Math.random() * (max - min + 1) + min))
  }

  return arrNumber;
}

console.log(randomNumber(10, -40, 50));