//Валидация полей ввода title and price
const inputTitle = document.querySelector('#title');
const inputPrice = document.querySelector('#price');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

inputPrice.addEventListener('input', () => {
  const priceValue = inputPrice.value;
  if (priceValue > MAX_PRICE) {
    inputPrice.setCustomValidity(`Значение больше максимального на ${priceValue - MAX_PRICE}`);
  } else if (priceValue < inputPrice.min) {
    inputPrice.setCustomValidity(`Значение меньше минимального на ${inputPrice.min - priceValue}`);
  }  else {
    inputPrice.setCustomValidity('');
  }
  inputPrice.reportValidity();
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

//Валидация полей ввода title and price
// inputPrice.addEventListener('invalid', () => {
//   if (inputPrice.validity.valueMissing) {
//     inputPrice.setCustomValidity('Обязательное поле');
//   } else if (inputPrice.validity.rangeOverflow) {
//     inputPrice.setCustomValidity('Максимальное значение — 1000000');
//   } else if (inputPrice.validity.rangeUnderflow) {
//     inputPrice.setCustomValidity('Введенное значение меньше минимального');
//   } else if (inputPrice.validity.typeMismatch) {
//     inputPrice.setCustomValidity('Числовое поле');
//   } else {
//     inputPrice.setCustomValidity('');
//   }
// });
// inputTitle.addEventListener('invalid', () => {
//   if (inputTitle.validity.tooShort) {
//     inputTitle.setCustomValidity('Минимальная длина — 30 символов');
//   } else if (inputTitle.validity.tooLong) {
//     inputTitle.setCustomValidity('Максимальная длина — 100 символов');
//   } else if (inputTitle.validity.valueMissing) {
//     inputTitle.setCustomValidity('Обязательное текстовое поле');
//   } else {
//     inputTitle.setCustomValidity('');
//   }
// });


export {inputPrice};
