'use strict';

{
  const rain = Math.round(Math.random());

  if (rain > 0) {
    console.log("Пошёл дождь.Возьмите зонт!");
  } else {
    console.log("Дождя нет!");
  };

  console.log(rain);
}

{
  const mathematicPoint = +prompt("Баллов по математике");
  const languageRussiaPoint = +prompt("Баллов по русскому языку");
  const computerPoint = +prompt("Баллов по информатике");
  const maxPoints = 265;


  if (mathematicPoint + languageRussiaPoint + computerPoint >= maxPoints) {
    console.log("Поздравляю, вы поступили на бюджет!")
  } else {
    console.log("Повезёт в следующий раз!")
  }
}

{
  const takeMoney = +prompt("Введите сумму", "");
  const bankMoney = 1000;

  if (isNaN(takeMoney) || takeMoney < 0) {
    console.log("Вы ввели некорректные данные!");
  } else if (takeMoney % bankMoney) {
    console.log("Введите сумму кратную 1000тг")
  } else {
    console.log(`Заберите деньги: ${takeMoney}тг`)
  }
}
