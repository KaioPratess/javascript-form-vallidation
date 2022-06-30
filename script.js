const form = document.querySelector('.form');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zipCode = document.querySelector('#zipcode');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm');

const passwordPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|).{8,32}$';

form.addEventListener('submit', (event) => {
  if(form.checkValidity()) {
    alert('Submitted')
  } else {
      alert('Please finish the filling!')
  }
  event.preventDefault();
});

password.setAttribute('pattern', passwordPattern);

email.addEventListener('change', () => {
  const messageBox = document.querySelector('#email + .error-message');
  if(email.validity.typeMismatch) {
    email.style.border = '2px solid red';
    messageBox.textContent = 'We need an email format: email@email.com';
  } else if (email.value === '') {
      email.style.border = '2px solid red';
      messageBox.textContent = 'Please fill this field';
  } else {
      email.style.border = '2px solid green';
      messageBox.textContent = '';
  }
});

country.addEventListener('change', () => {
  const messageBox = document.querySelector('#country + .error-message');
   if (country.value === '') {
    country.style.border = '2px solid red';
    messageBox.textContent = 'Please fill this field';
  } else {
      country.style.border = '2px solid green';
      messageBox.textContent = '';
   }
});

zipCode.addEventListener('change', () => {
  const messageBox = document.querySelector('#zipcode + .error-message');
  if (zipCode.value === '') {
      zipCode.style.border = '2px solid red';
      messageBox.textContent = 'Please fill this field';
  } else {
      zipCode.style.border = '2px solid green';
      messageBox.textContent = '';
  }
});

password.addEventListener('change', () => {
  const messageBox = document.querySelector('#password + .error-message');
  if(password.validity.patternMismatch) {
    password.style.border = '2px solid red';
    messageBox.textContent = `Your password must have:
    1 - At least one digit [0-9]
    2 - At least one lowercase character
    3 - At least one uppercase character
    4 - At least one special character
    5 - At least 8 characters in length, but no more than 32`;
  } else if(password.value === '') {
      password.style.border = '2px solid red';
      messageBox.textContent = 'Please fill this field';
  } else {
      password.style.border = '2px solid green';
      messageBox.textContent = '';
  }
});

passwordConfirm.addEventListener('change', () => {
  const messageBox = document.querySelector('#password-confirm + .error-message');
  if(passwordConfirm.value !== password.value) {
    passwordConfirm.style.border = '2px solid red';
    messageBox.textContent = 'The passwords are different';
  } else if (passwordConfirm.value === '') {
      passwordConfirm.style.border = '2px solid red';
      messageBox.textContent = 'Please fill this field';
  } else {
      passwordConfirm.style.border = '2px solid green';
      messageBox.textContent = '';
  }
});