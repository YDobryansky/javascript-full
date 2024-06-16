const formElem = document.querySelector('.login-form');
const emailElem = document.querySelector('#email');
const passwordElem = document.querySelector('#password');
const emailErrorElem = document.querySelector('.error__text-email');
const passwordErrorElem = document.querySelector('.error__text-password');

const validateEmail = () => {
  const emailValue = emailElem.value.trim();
  let message = '';
  if (!emailValue) {
    message = 'Required';
  } else if (!emailValue.includes('@')) {
    message = 'Should be an email';
    emailElem.addEventListener('input', validateEmail);
  }
  emailErrorElem.textContent = message;
  emailElem.classList.toggle('invalid', !!message);
  return !message;
};

const validatePassword = () => {
  const passwordValue = passwordElem.value.trim();
  let message = '';
  if (!passwordValue) {
    message = 'Required';
  }
  passwordErrorElem.textContent = message;
  passwordElem.classList.toggle('invalid', !!message);
  return !message;
};

const handleSubmit = event => {
  event.preventDefault();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isEmailValid && isPasswordValid) {
    const formData = Object.fromEntries(new FormData(formElem));
    formElem.reset();
    alert(JSON.stringify(formData));
  }
};

emailElem.addEventListener('input', validateEmail);
passwordElem.addEventListener('input', validatePassword);
formElem.addEventListener('submit', handleSubmit);
