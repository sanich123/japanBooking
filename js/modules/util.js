// Получает рандомное положительное число
const getRandomPositiveInteger = function (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
getRandomPositiveInteger();

// Получает рандомное положительное число с установленным количество запятых
const getRandomPositiveDecimal = function (min, max, decimalPlaces = 1) {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(decimalPlaces);
};
getRandomPositiveDecimal();

// Получает случайную длину массива
const getRandomArrayLength = (array) => {
  const newLength = getRandomPositiveInteger(0, array.length - 1);
  return array.slice(newLength);
};


export {getRandomPositiveInteger, getRandomPositiveDecimal, getRandomArrayLength};
