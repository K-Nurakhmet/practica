'use strict';

const randomNumber = (arrLength, max, min, string) => {
  const arrNumber = [];

  for (let i = 0; i < arrLength; i++) {
    let num = (Math.floor(Math.random() * (max - min + 1) + min));

    if (string === 'even' && num % 2 === 0) {
      arrNumber.push(num)
    } else if (string === 'odd' && num % 2 !== 0) {
      arrNumber.push(num)
    }
  };

  return arrNumber;
}

console.log(randomNumber(5, 10, 50, 'even'));