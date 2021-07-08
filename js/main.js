import './modules/form.js';
import './modules/validation.js';
import './modules/map.js';
import './modules/fetch.js';
import './modules/send-form.js';
import {createMarker} from './modules/map.js';
import { showAlert } from './modules/util.js';
import { getData } from './modules/fetch.js';
import {markerGroup} from './modules/map.js';

const blockFilter = document.querySelector('.map__filters');

const filterType = blockFilter.querySelector('#housing-type');
const filterPrice = blockFilter.querySelector('#housing-price');
const filterRooms = blockFilter.querySelector('#housing-rooms');
const filterGuests = blockFilter.querySelector('#housing-guests');
const filterFeatures = blockFilter.querySelector('#housing-features');


const renderSimilarOffers = (arr, evt) => {
  markerGroup.clearLayers();
  arr
    .filter
    ((offer) => {
      // if (evt.target.value === offer.offer.type) {
      //   return offer;
      // }
      // else
      if (evt.target.value === 'middle' && offer.offer.price >= 10000 && offer.offer.price <= 50000) {
        return offer;
      } else if (evt.target.value === 'low' && offer.offer.price < 10000) {
        console.log(offer);
        return offer;
      } else if (evt.target.value === 'high' && offer.offer.price > 50000) {
        return offer;
      } else if (evt.target.value === '1' && offer.offer.rooms === 1) {
        console.log(offer);
        return offer;
      } else if (evt.target.value === '2' && offer.offer.rooms === 2) {
        console.log(offer);
        return offer;
      } else if (evt.target.value === '3' && offer.offer.rooms === 3) {
        console.log(offer);
        return offer;
      } else if (+evt.target.value === 1 && offer.offer.guests < 2) {
        return offer;
      } else if (+evt.target.value === 2  && offer.offer.guests < 3) {
        console.log(offer);
        return offer;
      } else if (+evt.target.value === 0 && offer.offer.guests > 10) {
        return offer;
      } else if (evt.target.value === 'any') {
        return offer;
      }
    })
    .slice(0, arr.length / 5)
    .forEach((currentValue) => {
      createMarker(currentValue);
    });
};

const allOffers =
getData(
  ('https://23.javascript.pages.academy/keksobooking/data'),
  (offer) => {
    const arr = offer.slice();
    console.log(arr);
    const filtersFunctions = {
      'housing-type' : (value) => { arr.filter((it) => !value ? it : it.offer.type === value);
        console.log(arr);
      },
      'housing-type2' : (value) => { arr.filter((it) => value ? it.offer.type === value : it);
        console.log(arr);
      },
    };

    //console.log(filtersFunctions['housing-type']);
    //renderSimilarOffers(offer);
    filterPrice.addEventListener('change', (evt) => {
      renderSimilarOffers(arr, evt);
      console.log(renderSimilarOffers(arr,evt));
    });
    filterType.addEventListener('change', (evt) => {
      const name = evt.target.name;
      //console.log(name);
      const value = evt.target.value;
      //console.log(value);
      filtersFunctions[name](value);
      console.log(arr);
      //console.log(filtersFunctions[name]);
      //renderSimilarOffers(arr, evt);
    });
    filterRooms.addEventListener('change', (evt) => {
      renderSimilarOffers(offer, evt);
    });
    filterGuests.addEventListener('change', (evt) => {
      renderSimilarOffers(offer, evt);
    });
  },
  (error) => {
    showAlert(`Данные с сервера не загружены. ${error}`);
  },
);
allOffers();

// prices.addEventListener('change', (evt) => {
//   renderSimilarOffers(offer, evt.target.value);
// });
// types.addEventListener('change', (evt) => {
//   renderSimilarOffers(offer, evt.target.value);
// });


// const mas = [{ houseType: '1', name: 2 }, { houseType: '2', name: 3 }];

// let arr = mas.slice();

// const filters = {
//   type: (value) => { arr = arr.filter((it) => !value ? it : it.type === value); },
//   price: (value) => { arr = arr.filter((it) => it.price === value); },
// };

// types.addEventListener('change', (e) => {
//   const { type, value } = e.target;

//   filters[type](value);
//   renderSimilarOffers(arr);
// });

// offerType.addEventListener('change', (e) => {
//   const { name, value } = e.target;

//   filters[name](value);
//   renderSimilarOffers(arr);
// });
// Функции отвечающие за фильтрацию


