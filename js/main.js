import './modules/data.js';
import './modules/form.js';
import './modules/validation.js';
import './modules/map.js';
import './modules/fetch.js';

const submitButton = document.querySelector('.ad-form__submit');
submitButton.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  fetch('https://23.javascript.pages.academy/keksobooking', {
    method: 'POST',
    credentials: 'same-origin',
    body: formData,
  });
//     .then((response) => {
//       console.log(response.status);
//       console.log(response.ok);
//       return response.json();
//     })
//     .then((json) => {
//       console.log('Результат', json);
//     })
//     .catch((err) => {
//       console.error(err);
//     });
});

