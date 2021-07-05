import { bigMarker } from './map.js';
import { map } from './map.js';
import {postData} from './fetch.js';

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

const showFailMessage = () => {
  document.body.append(templateFail.cloneNode(true));
  document.addEventListener('keydown', removeFailMessage);
  document.querySelector('.error').addEventListener('click', removeFailMessageByClick);
};

const showSuccessMessage = () => {
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
};

submitButton.addEventListener('submit', (evt) => {
  evt.preventDefault();
  postData(
    ('https://23.javascript.pages.academy/keksobooking'),
    (new FormData(evt.target)),
    showSuccessMessage,
    showFailMessage,
  );
});

