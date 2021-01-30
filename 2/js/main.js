'use strict';

const generateRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomInt = (begin, end) => {
  if (begin < 0 || end < 0) {
    throw 'Отрицательные значения не допускаются!';
  }

  if (begin === end) {
    throw 'И начало, и конец имеют одинаковое значение!';
  }

  if (begin > end) {
    throw 'Начальное значение превышает конечное значение!';
  }

  return generateRandomInt(begin, end);
};

const getRandomFloat = (min, max, decimal = 2) => {
  if (max > min && min >= 0) {
    const result = (Math.random() * max).toFixed(decimal);
    return result >= min ? result : getRandomFloat(min, max, decimal);
  }

  throw new Error('Ошибка входных данных');
};


getRandomInt(0, 10000);
getRandomFloat (0, 20)
