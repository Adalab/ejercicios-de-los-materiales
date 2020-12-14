'use strict';

document.querySelector('.js-btn').addEventListener('click', () => {
  const inputName = document.querySelector('.js-input-name');
  const inputEmail = document.querySelector('.js-input-email');

  const queryParams = `?userName=${inputName.value}&userEmail=${inputEmail.value}`;

  fetch('http://localhost:3000/new-user' + queryParams)
    .then(response => response.json())
    .then(responseData => {
      console.log('Data:', responseData);
    });
});
