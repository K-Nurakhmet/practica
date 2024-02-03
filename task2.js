'use strict';

{
  for (let i = 1; i <= 10; i++) {
    console.log("------------");
    for (let y = 1; y <= 10; y++) {
      console.log(`${i} x ${y} = ${i ** y}`);
    }
  }
}

{
  const isPrime = (number) => {
    if (number <= 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  console.log(`Резуьтать: ${isPrime(200)}`);
}

{
  function reverseText(text) {
    let resultText = '';
    for (let i = text.length - 1; i >= 0; i--) {
      resultText += text[i];
    }
    return resultText;
  }

  console.log(`Резуьтать обратного текста: ${reverseText("Привет мир!")}`);
}