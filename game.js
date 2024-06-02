'use strict';

const gameRandomNumber = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log('Загаданное число:', randomNumber);
  let liveGame = 10;
  let goodGame = 0;

  while (liveGame > 0) {
    const userGame = +prompt(`Угадай число от 0 до 100. Увас ${liveGame} жизни`);

    if (Number.isNaN(userGame)) {
      console.log('Введи число!');
    }

    if (userGame > randomNumber) {
      alert('Больше! Попробуйте ещё раз.');
      liveGame--;
      goodGame++;

    } else if (userGame < randomNumber) {
      alert('Меньше! Попробуйте ещё раз.');
      liveGame--;
      goodGame++;
    }

    if (userGame === randomNumber) {
      console.log(`Правильно! Вы угадали за ${goodGame} количество попыток. Увас осталось ${liveGame} жизни`);
      break;
    }
  }

  if (liveGame === 0) {
    console.log('К сожалению, вы не угадали число. Попробуйте снова.');
  }

}
gameRandomNumber();