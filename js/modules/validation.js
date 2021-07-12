//Валидация полей ввода title and price
const inputTitle = document.querySelector('#title');
const inputPrice = document.querySelector('#price');
const inputAddress = document.querySelector('#address');


const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

inputPrice.addEventListener('input', () => {
  const priceValue = inputPrice.value;
  if (priceValue > MAX_PRICE) {
    inputPrice.setCustomValidity(`Введенное число больше максимального на ${priceValue - MAX_PRICE}`);
  } else if (priceValue < +inputPrice.min) {
    inputPrice.setCustomValidity(`Введенное число меньше минимального на ${+inputPrice.min - priceValue}`);
  }
  else {
    inputPrice.setCustomValidity('');
  }
  inputPrice.reportValidity();
});

inputPrice.addEventListener('invalid', () => {
  if (inputPrice.validity.valueMissing) {
    inputPrice.setCustomValidity('Обязательное поле');
  }
});

inputTitle.addEventListener('input', () => {
  const valueLength = inputTitle.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    inputTitle.setCustomValidity(`Надо ввести еще ${MIN_TITLE_LENGTH - valueLength} символов`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    inputTitle.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} символы`);
  } else {
    inputTitle.setCustomValidity('');
  }
  inputTitle.reportValidity();
});

inputTitle.addEventListener('invalid', () => {
  if (inputTitle.validity.valueMissing) {
    inputTitle.setCustomValidity('Обязательное поле');
  }
});

inputAddress.addEventListener('invalid', () => {
  if (inputAddress.validity.valueMissing) {
    inputAddress.setCustomValidity('Обязательное поле');
  } else {
    inputAddress.setCustomValidity('');
  }
});

export {inputPrice};
