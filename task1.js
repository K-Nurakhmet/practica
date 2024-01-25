'use strict';


{
  const currenciesMoney = (rub = 87.96, dollar = 1) => {
    let resultMoney = rub * dollar;
    const money = +prompt("Обмен 1$ - 87,96руб", "");

    if (Number.isNaN(money)) {
      return `${money} - Вы ввели некорректные данные!`;
    } else {
      return resultMoney *= money;
    }

  }

  const currenciesResultMoney = currenciesMoney();
  console.log(`Заберите деньги ${currenciesResultMoney}руб`);
}

{
  const changingWord = (text) => {

    let firstLetterText = text.charAt(0).toUpperCase();
    let lowerText = text.slice(1).toLowerCase();

    return firstLetterText + lowerText;
  }

  const changingText = changingWord("привет Мир");
  console.log(changingText)
}

{
  const calculate = (totalAmount, goodsCart, promoCode = "") => {

    if (goodsCart > 10) {
      totalAmount *= 0.03;
      console.log(`Больше 10 товаров скидка 3%`);
    }

    if (totalAmount > 30000) {
      totalAmount *= 0.15;
      console.log(`Больше 30000₽ скидка 15%`);
    }

    if (promoCode === "METHED") {
      totalAmount = promoCode * 0.1;
      console.log(`Промокод "METHED", скидка 10%`);
    }

    if (promoCode === "G3H2Z1" && totalAmount > 2000) {
      totalAmount -= 500;
      console.log(`Дарим 500 ${totalAmount}`)
    }

    return `${totalAmount} ${goodsCart} ${promoCode}`
  }

  const resultCalculate = calculate(40000, 'G3H2Z1');
  console.log(resultCalculate);
}
