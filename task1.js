'use strict';

{
  const euDollar = 1.02;
  const ruDollar = 1 / 73;

  const euToRub = (amountEU) => amountEU * euDollar / ruDollar;

  console.log(`Стоимость ${euToRub(10)}.руб`);
}


{
  const changingWord = (text) => {
    const normalStr = text.trim().toLowerCase();

    return normalStr[0].toUpperCase() + normalStr.slice(1);
  }

  console.log(changingWord("привет Мир"))
}

{
  const calculate = (amount, quantity, promo = "") => {
    let total = amount

    if (quantity > 10) {
      total -= total * 0.03;
      console.log(`Больше 10 товаров скидка 3% ${total}.руб`);
    }

    if (amount > 30000) {
      let excess = amount - 30000;
      total = total - (excess * 0.15);
      console.log(`Больше 30000₽ скидка 15% ${total}.руб`);
    }

    if (promo === "METHED") {
      total -= total * 0.1;
      console.log(`Промокод "METHED", скидка 10% ${total}.руб`);
    }

    if (promo === "G3H2Z1" && amount > 2000) {
      total -= 500;
      console.log(`Дарим 500 ${total}.руб`)
    }

    return `${total}`
  }

  console.log(`Общий сумма со скидок ${calculate(35000, 12, "METHED")}`);
}
