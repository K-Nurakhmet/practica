'use strict';

{
	const randomNumber = Math.floor(Math.random() * 100) + 1;
	console.log('Загаданное число:', randomNumber);

	const gameRandomNumber = () => {
		const userGame = prompt('Угадай число!');

		switch (true) {
			case userGame === null:
				console.log('Игра окончена!');
				return;
			case isNaN(userGame):
				console.log('Введи число!');
				return gameRandomNumber(userGame); // Рекурсия
			case +userGame > randomNumber:
				console.log('Больше! Попробуйте ещё раз.');
				break;
			case +userGame < randomNumber:
				console.log('Меньше! Попробуйте ещё раз.');
				break;
			default:
				console.log('Правильно! Вы угадали');
				return;
		}

		return gameRandomNumber(); // Рекурсия
	};

	gameRandomNumber();
}

{
	// 2-Задача

	const array = [];
	const generateArray = () => {
		const number = Math.round(Math.random() * 11);
		array.push(number);

		const sum = array.reduce((accum, item) => accum + item, 0);

		if (sum >= 50) {
			return array;
		} else {
			return generateArray(array);
		}
	};

	const result = generateArray(array);
	console.log(`Результат: ${result}`);
}
