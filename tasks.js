const rain = Math.round(Math.random());

const mathematicPoint = Number(prompt("Баллов по математике"));
const languageRussiaPoint = Number(prompt("Баллов по русскому языку"));
const computerPoint = Number(prompt("Баллов по информатике"));
const resultPoint = (mathematicPoint + languageRussiaPoint + computerPoint);
const maxPoints = 265;

let takeMoney = Number(prompt("Введите сумму", ""));
const bankMoney = 1000;
let resultMoney = takeMoney / bankMoney;

if (rain > 0) {
  console.log("Пошёл дождь.Возьмите зонт!");
} else {
  console.log("Дождя нет!");
};

if (maxPoints <= resultPoint) {
  console.log("Поздравляю, вы поступили на бюджет!")
} else {
  console.log("Повезёт в следующий раз!")
}

if (bankMoney > takeMoney) {
  console.log("Ниже 1000тг не выдаём!");
} else if (Number.isNaN(takeMoney)) {
  console.log("Вы ввели некорректные данные!");
} else if (Number.isInteger(resultMoney)) {
  console.log("Заберите деньги!");
} else {
  console.log("С сдачами не выдаем!");
}


console.log(rain);
console.log(resultMoney);

