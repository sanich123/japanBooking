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

const TYPE_OF_ROOMS = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

// Получает случайную длину массива
const getRandomArrayLength = (array) => {
  const newLength = getRandomPositiveInteger(0, array.length - 1);
  return array.slice(newLength);
};

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

const NUMBER_OF_COPIES = 3;

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

const getCreateCard = (index) => (
  {
    author: createAuthor(index),
    offer: createOffer(),
    location: createLocation(),
  }
);
console.log(getCreateCard());
const newOffers = new Array(NUMBER_OF_COPIES).fill('').map((value, index) =>
  getCreateCard(index));

const templatePlace = document.querySelector('.map__canvas');
//Не забыть убрать выравнивание в css!!

const templateOffer = document.querySelector('#card').content;
const popupArticle = templateOffer.querySelector('.popup');

const similarOfferFragment = document.createDocumentFragment();

newOffers.forEach((newOffer) => {
  const realOffer = popupArticle.cloneNode(true);
  realOffer.querySelector('.popup__title').textContent = newOffer.offer.title;
  realOffer.querySelector('.popup__text--address').textContent = `${newOffer.offer.address.lat   },${  newOffer.offer.address.lng}`;
  realOffer.querySelector('.popup__text--price').textContent = `${newOffer.offer.price  } ₽/ночь`;
  realOffer.querySelector('.popup__type').textContent = newOffer.offer.type;
  if (newOffer.offer.type === 'flat') {
    realOffer.querySelector('.popup__type').textContent = 'Квартира';
  }
  if (newOffer.offer.type === 'bungalow') {
    realOffer.querySelector('.popup__type').textContent = 'Бунгало';
  }
  if (newOffer.offer.type === 'house') {
    realOffer.querySelector('.popup__type').textContent = 'Дом';
  }
  if (newOffer.offer.type === 'palace') {
    realOffer.querySelector('.popup__type').textContent = 'Дворец';
  }
  if (newOffer.offer.type === 'hotel') {
    realOffer.querySelector('.popup__type').textContent = 'Отель';
  }
  realOffer.querySelector('.popup__text--capacity').textContent = `${newOffer.offer.rooms}   комнаты для ${newOffer.offer.guests} гостей`;

  realOffer.querySelector('.popup__text--time').textContent = `Заезд после ${  newOffer.offer.checkin  },` +  ` выезд до ${  newOffer.offer.checkout}`;
  const features = realOffer.querySelector('.popup__features');

  FEATURES.forEach((currentValue, index) => {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature');
    feature.classList.add(`popup__feature--${FEATURES[index]}`);
    features.appendChild(feature);
  });

  realOffer.querySelector('.popup__description').textContent = newOffer.offer.description;
  const photos = realOffer.querySelector('.popup__photos');

  PHOTOS.forEach((currentValue, index) => {
    const photo = document.createElement('img');
    photo.classList.add('popup__photo');
    photo.src = PHOTOS[index];
    photo.width = 45;
    photo.height = 40;
    photo.alt = 'Фотография жилья';
    photos.appendChild(photo);
  });

  realOffer.querySelector('.popup__avatar').src = newOffer.author.avatar;

  similarOfferFragment.appendChild(realOffer);

});

templatePlace.appendChild(similarOfferFragment);


