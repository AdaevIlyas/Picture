const checkTextInputs = (selector) => {
  const txtInputs = document.querySelectorAll(selector);

  txtInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яё 0-9 -]/ig)) {
        e.preventDefault();
      }
    });

    input.addEventListener('change', function (e) {
      if (!this.value.match(/[^а-яё 0-9 -]/ig)) {
        e.preventDefault();
      } else {
        this.value = '';
      }
    });
  });
};

export default checkTextInputs;