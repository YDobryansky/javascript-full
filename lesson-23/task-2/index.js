const formElem = document.querySelector('.login-form');
const emailElem = document.querySelector('#email');
const passwordElem = document.querySelector('#password');
const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const showError = (inputElem, errorElem, message) => {
  errorElem.textContent = message;
  inputElem.classList.toggle('invalid', !!message);
};

const validateEmail = () => {
  const emailValue = emailElem.value.trim();
  let message = '';
  if (!emailValue) {
    message = 'Required';
  } else if (!emailValue.includes('@')) {
    message = 'Should be an email';
  }
  showError(emailElem, emailErrorElem, message);
  return !message;
};

const validatePassword = () => {
  const passwordValue = passwordElem.value.trim();
  let message = '';
  if (!passwordValue) {
    message = 'Required';
  }
  showError(passwordElem, passwordErrorElem, message);
  return !message;
};

const handleSubmit = event => {
  event.preventDefault();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isEmailValid && isPasswordValid) {
    const formData = Object.fromEntries(new FormData(formElem));
    alert(JSON.stringify(formData));
  }
};

emailElem.addEventListener('input', validateEmail);
passwordElem.addEventListener('input', validatePassword);
formElem.addEventListener('submit', handleSubmit);
