import { newOffers, PHOTOS, FEATURES } from './data.js';

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

  switch (newOffer.offer.type) {
    case 'flat' : realOffer.querySelector('.popup__type').textContent = 'Квартира'; break;
    case 'bungalow' : realOffer.querySelector('.popup__type').textContent = 'Бунгало'; break;
    case 'house' : realOffer.querySelector('.popup__type').textContent = 'Дом'; break;
    case 'palace' : realOffer.querySelector('.popup__type').textContent = 'Дворец'; break;
    case 'hotel' : realOffer.querySelector('.popup__type').textContent = 'Отель'; break;
  }

  realOffer.querySelector('.popup__text--capacity').textContent = `${newOffer.offer.rooms}   комнаты для ${newOffer.offer.guests} гостей`;

  // eslint-disable-next-line no-useless-concat
  realOffer.querySelector('.popup__text--time').textContent = `Заезд после ${  newOffer.offer.checkin  },` +  ` выезд до ${  newOffer.offer.checkout}`;
  const features = realOffer.querySelector('.popup__features');

  FEATURES.forEach((currentValue) => {
    const feature = document.createElement('li');
    feature.classList.add('popup__feature');
    feature.classList.add(`popup__feature--${currentValue}`);
    features.appendChild(feature);
  });

  realOffer.querySelector('.popup__description').textContent = newOffer.offer.description;
  const photos = realOffer.querySelector('.popup__photos');

  PHOTOS.forEach((currentValue) => {
    const photo = document.createElement('img');
    photo.classList.add('popup__photo');
    photo.src = currentValue;
    photo.width = 45;
    photo.height = 40;
    photo.alt = 'Фотография жилья';
    photos.appendChild(photo);
  });
  realOffer.querySelector('.popup__avatar').src = newOffer.author.avatar;
  for (let index = 0; index < popupArticle.length; index++) {
    if (popupArticle.children[index].textContent === '')  {
      popupArticle.children[index].style.display = 'none';
    }
  }
  similarOfferFragment.appendChild(realOffer);
});

templatePlace.appendChild(similarOfferFragment);

