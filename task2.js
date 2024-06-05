'use strict';

const randomNumber = (arrLength, n, m) => {
  const arrNumber = [];

  for (let i = 1; i <= arrLength; i++) {
    arrNumber.push(Math.round(Math.random() * (m - n) + n))
  }

  return arrNumber;
}

console.log(randomNumber(99, 10, -10));