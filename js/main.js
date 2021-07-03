import './modules/form.js';
import './modules/validation.js';
import './modules/map.js';
import './modules/fetch.js';
import './modules/send-form.js';
import {createMarker} from './modules/map.js';
import { showAlert } from './modules/util.js';
import { getData } from './modules/fetch.js';

const showOffers = getData(
  ('https://23.javascript.pages.academy/keksobooking/data'),
  (newOffer) => {
    newOffer.forEach((currentValue) => {
      createMarker(currentValue);
    });
  },
  (error) => {
    showAlert(`Данные с сервера не загружены. ${error}`);
  },
);
showOffers();
