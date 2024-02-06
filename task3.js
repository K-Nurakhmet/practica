'use strict';

{
  const allStudents = ['Иванов', 'Петров', 'Сидиров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов']
  const failedStudents = ['Сидиров', 'Смирнов', 'Попов']

  const filter = (allStudents, failedStudents) => {
    return allStudents.filter(student => failedStudents.includes(student));
  }

  const failed = filter(allStudents, failedStudents);
  console.log(failed);
}

{
  const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

  const getAverageValue = (allCashbox) => {
    let result = 0;

    for (let i = 0; i < allCashbox.length; i++) {
      let num = allCashbox[i];

      result += num
    }

    return Math.round(result / allCashbox.length);
  }

  const averageCheck = getAverageValue(allCashbox);

  console.log(`Средний чек за день: ${averageCheck}`);
}

{
  const allName = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

  const addPrefix = (names, prefix) => {
    return names.map((item) => `${prefix} ${item}`);

  }
  const result = addPrefix(allName, 'Mr');

  console.log(result);
}