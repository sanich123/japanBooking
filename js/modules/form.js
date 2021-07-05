import { inputPrice } from './validation.js';
//Соответствие комнат и гостей
const roomNumber = document.querySelector('#room_number');
const roomCapacity = document.querySelector('#capacity');

//Соответствие типа жилья и цены
const typeOfHouse = document.querySelector('#type');

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
    roomCapacity[2].selected = true;
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
    roomCapacity[3].selected = true;
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

