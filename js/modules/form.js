//Соответствие комнат и гостей
const roomNumber = document.querySelector('#room_number');
const roomCapacity = document.querySelector('#capacity');

//Соответствие типа жилья и цены
const typeOfHouse = document.querySelector('#type');

//Валидация полей ввода title and price
const inputTitle = document.querySelector('#title');
const inputPrice = document.querySelector('#price');
const inputAddress = document.querySelector('#address');
// const MIN_TITLE_LENGTH = 30;
// const MAX_TITLE_LENGTH = 100;
// const MAX_PRICE = 1000000;

//Валидация полей ввода title and price
inputPrice.addEventListener('invalid', () => {
  if (inputPrice.validity.valueMissing) {
    inputPrice.setCustomValidity('Обязательное поле');
  } else if (inputPrice.validity.rangeOverflow) {
    inputPrice.setCustomValidity('Максимальное значение — 1 000 000');
  } else if (inputPrice.validity.rangeUnderflow) {
    inputPrice.setCustomValidity('Введенное значение меньше минимального');
  } else if (inputPrice.validity.typeMismatch) {
    inputPrice.setCustomValidity('Числовое поле');
  } else {
    inputPrice.setCustomValidity('');
  }
});

inputTitle.addEventListener('invalid', () => {
  if (inputTitle.validity.tooShort) {
    inputTitle.setCustomValidity('Минимальная длина — 30 символов');
  } else if (inputTitle.validity.tooLong) {
    inputTitle.setCustomValidity('Максимальная длина — 100 символов');
  } else if (inputTitle.validity.valueMissing) {
    inputTitle.setCustomValidity('Обязательное текстовое поле');
  } else {
    inputTitle.setCustomValidity('');
  }
});

inputAddress.addEventListener('invalid', () => {
  if (inputAddress.validity.valueMissing) {
    inputAddress.setCustomValidity('Обязательное поле');
  } else {
    inputAddress.setCustomValidity('');
  }
});

// inputPrice.addEventListener('input', () => {
//   const priceLength = inputPrice.value.length;
//   if (priceLength > MAX_PRICE) {
//     inputPrice.setCustomValidity(`Удалите лишние ${priceLength - MAX_PRICE} символы`);
//   } else {
//     inputPrice.setCustomValidity('');
//   }
//   inputPrice.reportValidity();
// });

// inputTitle.addEventListener('input', () => {
//   const valueLength = inputTitle.value.length;
//   if (valueLength < MIN_TITLE_LENGTH) {
//     inputTitle.setCustomValidity(`Надо ввести еще ${MIN_TITLE_LENGTH - valueLength} символов`);
//   } else if (valueLength > MAX_TITLE_LENGTH) {
//     inputTitle.setCustomValidity(`Удалите лишние ${valueLength - MAX_TITLE_LENGTH} символы`);
//   } else {
//     inputTitle.setCustomValidity('');
//   }
//   inputTitle.reportValidity();
// });


//Соответствие типа жилья и цены
typeOfHouse.addEventListener('change', () => {
  if (typeOfHouse[0].selected) {
    inputPrice.min = 0;
    inputPrice.placeholder = inputPrice.min;
  }
  if (typeOfHouse[1].selected) {
    inputPrice.min = 1000;
    inputPrice.placeholder = inputPrice.min;
  }
  if (typeOfHouse[2].selected) {
    inputPrice.min = 3000;
    inputPrice.placeholder = inputPrice.min;
  }
  if (typeOfHouse[3].selected) {
    inputPrice.min = 5000;
    inputPrice.placeholder = inputPrice.min;
  }
  if (typeOfHouse[4].selected) {
    inputPrice.min = 10000;
    inputPrice.placeholder = inputPrice.min;
  }
});


//Соответствие комнат и вместимости
roomNumber.addEventListener('change', () => {
  if (roomNumber[0].selected) {
    roomCapacity[0].disabled = true;
    roomCapacity[1].disabled = true;
    roomCapacity[2].disabled = false;
    roomCapacity[3].disabled = true;
  }
  if (roomNumber[1].selected) {
    roomCapacity[0].disabled = true;
    roomCapacity[1].disabled = false;
    roomCapacity[2].disabled = false;
    roomCapacity[3].disabled = true;
  }
  if (roomNumber[2].selected) {
    roomCapacity[0].disabled = false;
    roomCapacity[1].disabled = false;
    roomCapacity[2].disabled = false;
    roomCapacity[3].disabled = true;
  }
  if (roomNumber[3].selected) {
    roomCapacity[0].disabled = true;
    roomCapacity[1].disabled = true;
    roomCapacity[2].disabled = true;
    roomCapacity[3].disabled = false;
  }
});
//Синхронизация времени заезда - уезда
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  if (timeIn[0].selected) {
    timeOut[0].selected = true;
  }
  if (timeIn[1].selected) {
    timeOut[1].selected = true;
  }
  if (timeIn[2].selected) {
    timeOut[2].selected = true;
  }
});

timeOut.addEventListener('change', () => {
  if (timeOut[0].selected) {
    timeIn[0].selected = true;
  }
  if (timeOut[1].selected) {
    timeIn[1].selected = true;
  }
  if (timeOut[2].selected) {
    timeIn[2].selected = true;
  }
});
