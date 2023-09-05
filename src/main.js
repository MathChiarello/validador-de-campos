import validator from 'validator';
import './style.css';

const warning = document.querySelector('#warning');
const button = document.querySelector('#button');
const input = document.querySelector('#input');
const select = document.querySelector('#select');

button.addEventListener('click', () => {
  switch (select.value) {
  case 'Email': {
    const testEmail = validator.isEmail(input.value);
    warning.innerHTML = `A validação retornou ${testEmail}`;
    break;
  }
  case 'CPF': {
    const testCPF = validator.isInt(input.value)
      && validator.isLength(input.value, { min: 11, max: 11 });
    warning.innerHTML = `A validação retornou ${testCPF}`;
    break;
  }
  default: {
    console.log('Deu ruim!');
    break;
  }
  }
});
