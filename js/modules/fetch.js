import {createMarker} from './map.js';
import { showAlert } from './util.js';
import {bigMarker} from './map.js';
import {map} from './map.js';

const createFetchGet = (onSuccess, onError) => () => fetch('https://23.javascript.pages.academy/keksobooking/data', {
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
  .catch(() => {
    onError(showAlert('Не удалось получить данные с сервера. Попробуйте ещё раз'));
  });


const fetchOffers = createFetchGet(
  (newOffer) => {
    newOffer.forEach((currentValue) => {
      createMarker(currentValue);
    });
  },
  // (err) => {
  //   // eslint-disable-next-line no-console
  //   console.error(err);
  // },
);
fetchOffers();

const submitButton = document.querySelector('.ad-form');
const templateSuccess = document.querySelector('#success').content.querySelector('.success');
const templateFail = document.querySelector('#error').content.querySelector('.error');

const removeSuccessMessage = (evt) => {
  if (evt.keyCode === 27 && document.querySelector('.success')) {
    document.querySelector('.success').remove();
  }
};
const removeSuccessMessageByClick = () => {
  document.querySelector('.success').remove();
};
const removeFailMessage = (evt) => {
  if (evt.keyCode === 27 && document.querySelector('.error')) {
    document.querySelector('.error').remove();
  }
};
const removeFailMessageByClick = () => {
  document.querySelector('.error').remove();
};

const createFetchPost = () => {
  submitButton.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    fetch('https://23.javascript.pages.academy/keksobooking', {
      method: 'POST',
      credentials: 'same-origin',
      body: formData,
    }).then((response) => {
      if (response.ok) {
        document.body.append(templateSuccess.cloneNode(true));
        bigMarker.setLatLng({
          lat: 35.68491, lng: 139.75159,
        });
        map.setView({
          lat: 35.68491, lng: 139.75159,
        }, 14);
        document.addEventListener('keydown', removeSuccessMessage);
        document.querySelector('.success').addEventListener('click', removeSuccessMessageByClick);
        submitButton.reset();
      } else {
        document.body.append(templateFail.cloneNode(true));
        document.addEventListener('keydown', removeFailMessage);
        document.querySelector('.error').addEventListener('click', removeFailMessageByClick);
      }
    })
      .catch(() => {
        document.body.append(templateFail.cloneNode(true));
        document.addEventListener('keydown', removeFailMessage);
        document.querySelector('.error').addEventListener('click', removeFailMessageByClick);
      });
  });
};
createFetchPost();


// .then((response) => {
//   if (response.ok) {
//     return response.json();
//   }
//   throw new Error(`${response.status} ${response.statusText}`);
// })
// .then((json) => {
//   console.log('Результат', json);
// })
// .catch(() => {
//   showAlert('Не удалось отправить данные на сервер. Попробуйте ещё раз');
// });

// });
