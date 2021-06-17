const ourForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.children;
const allFieldsets = ourForm.querySelectorAll('fieldset');

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
disableFunction();

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
enableFunction();
