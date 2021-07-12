const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooserPhoto = document.querySelector('.ad-form__field input[type="file"]');
const fileChooserHouse = document.querySelector('.ad-form__input');

const housePreview = document.querySelector('.ad-form__photo');
const avatarPreview = document.querySelector('.ad-form-header__preview img');


fileChooserPhoto.addEventListener('change', () => {
  const file = fileChooserPhoto.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      avatarPreview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
});

fileChooserHouse.addEventListener('change', () => {
  const file = fileChooserHouse.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const imageOfHouse = document.createElement('img');
      imageOfHouse.alt = 'Фотография жилья';
      imageOfHouse.width = '40';
      imageOfHouse.height = '44';
      imageOfHouse.classList.add('ad-form-header__preview');
      imageOfHouse.src = reader.result;
      housePreview.appendChild(imageOfHouse);
    });
    reader.readAsDataURL(file);
  }
});
