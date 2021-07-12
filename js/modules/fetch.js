import { disableFilterForm } from './util.js';
//Функция, получающая данные с сервера
const getData = (url, onSuccess, onError) => () =>
  fetch(url, {
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
      disableFilterForm();
    });

//Функция, отправляющая данные на сервер
const postData = (url, body, onSuccess, onError) => {
  fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    body: body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    });
};

export {getData, postData};
