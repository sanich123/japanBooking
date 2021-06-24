import { disableFunction, enableFunction } from './util.js';

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
    lng: 139.69171}, 10);
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


const points = [
  {
    title: 'Футура',
    lat: 35.68810,
    lng: 139.78342,
  },
  {
    title: 'Шаверма',
    lat: 35.65575,
    lng: 139.75743,
  },
  {
    title: 'Франк',
    lat: 35.69978,
    lng: 139.73093,
  },
  {
    title: 'Ginza',
    lat: 35.67035,
    lng: 139.79930,
  },
];

points.forEach(({lat, lng, title}) => {
  const customIcon = L.icon({
    iconUrl: './leaflet/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      customIcon,
    },
  );

  marker.addTo(map)
    .bindPopup(title);
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
