'use strict';

document.querySelector('.js-btn-signup').addEventListener('click', () => {
  const inputEmail = document.querySelector('.js-input-email');
  const inputPassword = document.querySelector('.js-input-password');

  const bodyParams = {
    email: inputEmail.value,
    password: inputPassword.value
  };

  fetch('//localhost:3000/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyParams)
  })
    .then(response => response.json())
    .then(data => {
      document.querySelector(
        '.js-result'
      ).innerHTML = `Te has registrado con el id: ${data.userId}`;
    });
});
