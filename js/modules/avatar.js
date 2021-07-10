const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const fileChooser = document.querySelector('.ad-form__field input[type="file"]');
const avatarPreview = document.querySelector('.ad-form-header__preview img');


fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
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
