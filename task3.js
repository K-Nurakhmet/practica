'use strict';

const randomNumber = (arrLength, n, m, string) => {
  const arrNumber = [];

  while (arrNumber.length < arrLength) {
    let num = Math.round(Math.random() * (m - n) + n);



    if (string === 'even' && num % 2 === 0) {
      arrNumber.push(num);
    } else if (string === 'odd' && num % 2 !== 0) {
      arrNumber.push(num);
    }

    if (!string) {
      arrNumber.push(num);
    }
  };

  return arrNumber;
};

console.log(randomNumber(10, 10, -10));
console.log(randomNumber(10, -10, 10, 'odd'));
console.log(randomNumber(10, -10, 10, 'even'));
