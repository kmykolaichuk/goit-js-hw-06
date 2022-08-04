const validationInput = document.querySelector('#validation-input');

const ValidInputEl = elem => {
  if (Number(validationInput.dataset.length) === elem.currentTarget.value.length) {
    validationInput.classList.remove('invalid');
    validationInput.classList.add('valid');
  } else validationInput.classList.add('invalid');
};

validationInput.addEventListener('blur', ValidInputEl);
