const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};

function onInputChange(event) {
  if (event.currentTarget.value === '') {
    refs.span.textContent = 'Anonymous';
  } else {
    refs.span.textContent = event.currentTarget.value;
  }
}

refs.input.addEventListener('input', onInputChange);
