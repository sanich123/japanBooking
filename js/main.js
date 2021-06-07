const getRandomPositiveInteger = function  (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//console.log(getRandomPositiveInteger(-57.989879, 58.989979));

const getRandomPositiveDecimal = function (a, b, decimalPlaces) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return result.toFixed(decimalPlaces);
};

//console.log(getRandomPositiveDecimal(-43.89798, -48.95678, 5));


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

const numberOfCopies = 10;

const getRandomArrayMember = (array) => {
  const randomMember = array[getRandomPositiveInteger(1, 6)];
  return randomMember;
};
console.log(getRandomArrayMember(FEATURES));


const getRandomArrayLength = (array) => {
  const newLength = _.random(0, array.length);
  return array.slice(newLength);
};

console.log(getRandomArrayLength(FEATURES));


const createAuthor = () => ({
  avatar: `img/avatars/user0${  _.random(1, 10)  }.png`,
});

const createOffer = () => ({
  title: 'Предлагаем снять уютную двушку на окраине Токио',
  address: {
    lat: _.random(35.65000, 35.70000).toFixed(5),
    lng: _.random(139.70000, 139.80000).toFixed(5),
  },
  price: parseInt(_.random(0, Infinity)),
  type: TYPE_OF_ROOMS[_.random(0, TYPE_OF_ROOMS.length - 1)],
  rooms: parseInt(_.random(0, Infinity)),
  guests: parseInt(_.random(0, Infinity)),
  checkin: CHECK_IN[_.random(0, CHECK_IN.length - 1)],
  checkout: CHECK_OUT[_.random(0, CHECK_OUT.length - 1)],
  features: getRandomArrayLength(FEATURES),
  description: 'Какое-то описание',
  photos: getRandomArrayLength(PHOTOS),
});

//console.log(createOffer());

const createLocation = () => ({
  lat: _.random(35.65000, 35.70000).toFixed(5),
  lng: _.random(139.70000, 139.80000).toFixed(5),
});

//console.log(createLocation());

const getCreateCard = () => (
  {
    author: createAuthor(),
    offer: createOffer(),
    location: createLocation(),
  }
);

console.log(getCreateCard());

const offers = new Array(numberOfCopies).fill('').map(() => getCreateCard());

console.log(offers);
