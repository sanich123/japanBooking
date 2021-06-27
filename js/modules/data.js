import { getRandomPositiveInteger, getRandomPositiveDecimal, getRandomArrayLength } from './util.js';

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

const NUMBER_OF_COPIES = 10;

const createAuthor = (index) => {
  if (index < 9) {
    return {
      avatar: `img/avatars/user0${index + 1}.png`,
    };
  } {
    return {
      avatar: `img/avatars/user${index + 1}.png`,
    };
  }
};

const createOffer = () => ({
  title: 'Предлагаем снять уютную двушку на окраине Токио',
  address: {
    lat: getRandomPositiveDecimal(35.65000, 35.70000, 5),
    lng: getRandomPositiveDecimal(139.70000, 139.80000, 5),
  },
  price: getRandomPositiveInteger(0, 9999),
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

const getCreateCard = (index) => (
  {
    author: createAuthor(index),
    offer: createOffer(),
    location: createLocation(),
  }
);

const newOffers = new Array(NUMBER_OF_COPIES).fill('').map((value, index) =>
  getCreateCard(index));


export { newOffers, PHOTOS, FEATURES };
