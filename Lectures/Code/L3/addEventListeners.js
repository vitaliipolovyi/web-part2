const button = document.querySelector('button#user-form-submit');

/** @param {Event} event */
const callback = function (event) {
  event.preventDefault();
  console.log(this, event.currentTarget);
  const formData = new FormData(this);
  console.log(formData.get('form-field-text'));
  console.log(document.querySelector('input[name="form-field-text"]').value);
};

const useCapture = true;

// button.addEventListener('click', callback, useCapture);

// **** //

const options = {
  capture: true,
  once: false, // --> викликається тільки один раз
  passive: true, // --> не викликає preventDefault
};

const form = document.querySelector('form[name="test-form"]');
form.addEventListener('submit', callback); //, options);
