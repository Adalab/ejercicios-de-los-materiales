'use strict';

document.querySelector('.js-btn').addEventListener('click', () => {
  const inputName = document.querySelector('.js-input-name');
  const inputEmail = document.querySelector('.js-input-email');

  const bodyParams = {
    userName: inputName.value,
    userEmail: inputEmail.value
  };

  fetch('http://localhost:3000/new-user', {
    method: 'POST',
    body: JSON.stringify(bodyParams)
  })
    .then(response => response.json())
    .then(responseData => {
      console.log('Data:', responseData);
    });
});
