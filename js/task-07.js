const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

refs.input.addEventListener(
  'input',
  elem => (refs.span.style.fontSize = `${elem.currentTarget.value}px`)
);
