import { disableFunction, enableFunction } from './util.js';
import { newOffers } from './data.js';

disableFunction();

const resetButton = document.querySelector('.ad-form__reset');
const inputAddress = document.querySelector('#address');

//Создаем карту
const map = L
  .map('map-canvas')
  .on('load', () => {
    enableFunction();
  })
  .setView({lat: 35.68950,
    lng: 139.69171}, 16);
//Добавляем слой с изображениями
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

//Создаем большую иконку
const bigCustomIcon = L.icon({
  iconUrl: './leaflet/images/marker-icon-2x.png',
  iconSize: [50, 82],
  iconAnchor: [25, 82],
});

//Создаем большую метку
const bigMarker = L.marker(
  { lat: 35.68950, lng: 139.69171 },
  { draggable:true, icon: bigCustomIcon },
).addTo(map);

//Обработчик перемещения большой метки
bigMarker.on('moveend', (evt) => {
  inputAddress.value = evt.target.getLatLng();
});


// bigMarker.remove();


// points.forEach(({lat, lng, title}) => {
//   const customIcon = L.icon({
//     iconUrl: './leaflet/images/marker-icon.png',
//     iconSize: [25, 41],
//     iconAnchor: [12, 41],
//   });
//   const marker = L.marker(
//     {
//       lat,
//       lng,
//     },
//     {
//       customIcon,
//     },
//   );

//   marker.addTo(map)
//     .bindPopup(title);
// });

newOffers.forEach((newOffer) => {

  const customIcon = L.icon({
    iconUrl: './leaflet/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  const marker = L.marker(
    {
      lat: newOffer.location.lat,
      lng: newOffer.location.lng,
    },
    {
      customIcon,
    },
  );
  marker.addTo(map)
    .bindPopup(newOffer.offer.title);
});

resetButton.addEventListener('click', () => {
  bigMarker.setLatLng({
    lat: 35.68950,
    lng: 139.69171,
  });

  map.setView({
    lat: 35.68950,
    lng: 139.69171,
  }, 16);
});
