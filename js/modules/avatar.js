const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const fileChooserAvatar = document.querySelector('.ad-form__field input[type="file"]');
const fileChooserPhotoHouse = document.querySelector('.ad-form__input');

const housePreview = document.querySelector('.ad-form__photo');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const WIDTH = 40;
const HEIGHT = 44;
//Превью аватара пользователя
fileChooserAvatar.addEventListener('change', () => {
  const file = fileChooserAvatar.files[0];
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

//Превью фото жилья
fileChooserPhotoHouse.addEventListener('change', () => {
  const file = fileChooserPhotoHouse.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const imageOfHouse = document.createElement('img');
      imageOfHouse.alt = 'Фотография жилья';
      imageOfHouse.width = WIDTH;
      imageOfHouse.height = HEIGHT;
      imageOfHouse.classList.add('ad-form-header__preview');
      imageOfHouse.src = reader.result;
      housePreview.appendChild(imageOfHouse);
    });
    reader.readAsDataURL(file);
  }
});
