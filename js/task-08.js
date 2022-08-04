const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  const {
    elements: { email, password },
  } = evt.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  const formData = {
    Email: email.value,
    Password: password.value,
  };

  console.log(formData);
  evt.currentTarget.reset();
}
