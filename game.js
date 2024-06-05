'use strict';


const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log('Загаданное число:', randomNumber);

const gameRandomNumber = () => {
  const userGame = prompt('Угадай число от 0 до 100.');

  if (userGame === null) {
    console.log('Игра окончена!');
    return;
  }

  switch (true) {
    case isNaN(userGame):
      console.log('Введи число!');
      return gameRandomNumber(userGame);
    case +userGame > randomNumber:
      console.log('Больше! Попробуйте ещё раз.');
      return gameRandomNumber();
    case +userGame < randomNumber:
      console.log('Меньше! Попробуйте ещё раз.');
      return gameRandomNumber();
    case +userGame === randomNumber:
      console.log('Правильно! Вы угадали');
      break;
  }
}

gameRandomNumber();