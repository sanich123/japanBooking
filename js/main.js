const getRandomPositiveInteger = function  (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
getRandomPositiveInteger();

const getRandomPositiveDecimal = function (min, max, decimalPlaces = 1) {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(decimalPlaces);
};
getRandomPositiveDecimal();

const TYPE_OF_ROOMS = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_IN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECK_OUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const receiveNumber = function () {
  const number = NUMBERS.length;
  NUMBERS.splice(0, 1);
  if (number >= 10) {
    return number;
  }
  return (`0${  number}`);
};

const NUMBER_OF_COPIES = 10;

const getRandomArrayLength = (array) => {
  const newLength = getRandomPositiveInteger(0, array.length - 1);
  return array.slice(newLength);
};

const createAuthor = () => ({
  avatar: `img/avatars/user${receiveNumber()}.png`,
});

const createOffer = () => ({
  title: 'Предлагаем снять уютную двушку на окраине Токио',
  address: {
    lat: getRandomPositiveDecimal(35.65000, 35.70000, 5),
    lng: getRandomPositiveDecimal(139.70000, 139.80000, 5),
  },
  price: getRandomPositiveInteger(0, 999999),
  type: TYPE_OF_ROOMS[getRandomPositiveInteger(0, TYPE_OF_ROOMS.length - 1)],
  rooms: getRandomPositiveInteger(1, 7),
  guests: getRandomPositiveInteger(1, 5),
  checkin: CHECK_IN[getRandomPositiveInteger(0, CHECK_IN.length - 1)],
  checkout: CHECK_OUT[getRandomPositiveInteger(0, CHECK_OUT.length - 1)],
  features: getRandomArrayLength(FEATURES),
  description: 'Какое-то описание',
  photos: getRandomArrayLength(PHOTOS),
});

const createLocation = () => ({
  lat: getRandomPositiveDecimal(35.65000, 35.70000, 5),
  lng: getRandomPositiveDecimal(139.70000, 139.80000, 5),
});

const getCreateCard = () => (
  {
    author: createAuthor(),
    offer: createOffer(),
    location: createLocation(),
  }
);

new Array(NUMBER_OF_COPIES).fill('').map(() => getCreateCard());
