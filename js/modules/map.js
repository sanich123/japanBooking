import { disableFunction, enableFunction } from './util.js';

disableFunction();

const resetButton = document.querySelector('.ad-form__reset');
const inputAddress = document.querySelector('#address');
const templateOffer = document.querySelector('#card').content;
const popupArticle = templateOffer.querySelector('.popup');
const similarOfferFragment = document.createDocumentFragment();

//Создаем карту
const map = L
  .map('map-canvas')
  .on('load', () => {
    enableFunction();
  })
  .setView({lat: 35.68491, lng: 139.75159}, 14);
//Добавляем слой с изображениями
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//Создаем большую иконку
const bigCustomIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

//Создаем большую метку
const bigMarker = L.marker(
  { lat: 35.68491, lng: 139.75159},
  { draggable:true, icon: bigCustomIcon },
).addTo(map);

//Обработчик перемещения большой метки
bigMarker.on('moveend', (evt) => {
  const latLng = evt.target.getLatLng();
  inputAddress.value = `${latLng.lat.toFixed(5)}, ${  latLng.lng.toFixed(5)}`;
});

// bigMarker.remove();

const customIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

//Создание попапа
const createCustomPopup = (newOffer) => {
  const realOffer = popupArticle.cloneNode(true);
  realOffer.querySelector('.popup__title').textContent = newOffer.offer.title;
  realOffer.querySelector('.popup__text--address').textContent = newOffer.offer.address;
  // realOffer.querySelector('.popup__text--address').textContent = `${newOffer.offer.address.lat   },${  newOffer.offer.address.lng}`;
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
  features.innerHTML = '';
  if (newOffer.offer.features) {
    newOffer.offer.features.forEach((currentValue) => {
      const feature = document.createElement('li');
      feature.classList.add('popup__feature');
      feature.classList.add(`popup__feature--${currentValue}`);
      features.appendChild(feature);
    });
  }
  realOffer.querySelector('.popup__description').textContent = newOffer.offer.description;
  const photos = realOffer.querySelector('.popup__photos');
  photos.innerHTML = '';
  if (newOffer.offer.photos) {
    newOffer.offer.photos.forEach((currentValue) => {
      const photo = document.createElement('img');
      photo.classList.add('popup__photo');
      photo.src = currentValue;
      photo.width = 45;
      photo.height = 40;
      photo.alt = 'Фотография жилья';
      photos.appendChild(photo);
    });
  }
  realOffer.querySelector('.popup__avatar').src = newOffer.author.avatar;
  for (let index = 0; index < popupArticle.length; index++) {
    if (popupArticle.children[index].textContent === '')  {
      popupArticle.children[index].style.display = 'none';
    }
  }
  similarOfferFragment.appendChild(realOffer);
  return realOffer;
};
const markerGroup = L.layerGroup().addTo(map);

//Функция создания маркера с popupом
const createMarker = (currentValue) => {
  const marker = L.marker(
    { lat: currentValue.location.lat,
      lng: currentValue.location.lng },
    { icon: customIcon },
  );
  marker.addTo(markerGroup).bindPopup(createCustomPopup(currentValue),{ keepInView: true });
};

markerGroup.clearLayers();
resetButton.addEventListener('click', () => {
  bigMarker.setLatLng({
    lat: 35.68491, lng: 139.75159,
  });
  map.setView({
    lat: 35.68491, lng: 139.75159,
  }, 14);
});

export {createMarker, bigMarker, map, markerGroup};
