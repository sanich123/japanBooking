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

//Блокирует и разблокирует форму при запуске
const ourForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.children;
const allFieldsets = ourForm.querySelectorAll('fieldset');

//Выключение всех форм
const disableFunction = function () {
  ourForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  for (const fieldset of allFieldsets) {
    fieldset.disabled = true;
  }
  for (const mapFiltersSelect of mapFiltersSelects) {
    mapFiltersSelect.disabled = true;
  }
};
disableFunction();

//Включение всех форм
const enableFunction = function () {
  ourForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  for (const fieldset of allFieldsets) {
    fieldset.disabled = false;
  }
  for (const mapFiltersSelect of mapFiltersSelects) {
    mapFiltersSelect.disabled = false;
  }
};
enableFunction();

export {getRandomPositiveInteger, getRandomPositiveDecimal, getRandomArrayLength, enableFunction, disableFunction};

