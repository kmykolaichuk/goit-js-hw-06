const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

function onInputChange(evt) {
  if (evt.currentTarget.value === '') {
    refs.span.textContent = 'Anonymous';
  } else {
    refs.span.textContent = evt.currentTarget.value;
  }
}

refs.input.addEventListener('input', onInputChange);
