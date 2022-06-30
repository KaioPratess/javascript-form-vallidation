const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input');

const emailPattern = '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$';
const passwordPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$';
const zipCodePattern = '^\d{5}(?:[-\s]\d{4})?$';

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if(isEmpty()) {
    console.log('Fill in the fields')
  }
})

function isEmpty() {
  inputs.forEach((input) => {
    if(input.value === '') {
      return true
    } else {
        return false
    }
  })
}