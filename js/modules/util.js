//Блокирует и разблокирует форму при запуске
const ourForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.children;
const allFieldsets = ourForm.querySelectorAll('fieldset');
const ALERT_SHOW_TIME = 5000;
//Выключение всех форм
const disableFunction = function () {
  ourForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');
  for (const fieldset of allFieldsets) {
    fieldset.disabled = true;
  }
  for (const mapFiltersSelect of mapFiltersSelects) {
    mapFiltersSelect.disabled = true;
  }
};
//Включение всех форм
const enableFunction = function () {
  ourForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');
  for (const fieldset of allFieldsets) {
    fieldset.disabled = false;
  }
  for (const mapFiltersSelect of mapFiltersSelects) {
    mapFiltersSelect.disabled = false;
  }
};

const disableFilterForm = () => {
  mapFilters.classList.add('map__filters--disabled');
  for (const mapFiltersSelect of mapFiltersSelects) {
    mapFiltersSelect.disabled = true;
  }
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {enableFunction, disableFunction, showAlert, disableFilterForm};

