import {createMarker} from './map.js';

const createFetch = (onSuccess, onError) => () => fetch('https://23.javascript.pages.academy/keksobooking/data', {
  method: 'GET',
  credentials: 'same-origin',
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((json) => {
    onSuccess(json);
  })
  .catch((err) => {
    onError(err);
  });

export {createFetch};

const fetchOffers = createFetch(
  (newOffer) => {
    newOffer.forEach((currentValue) => {
      createMarker(currentValue);
    });
  },
  (err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  },
);
fetchOffers();
