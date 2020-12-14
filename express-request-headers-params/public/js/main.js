'use strict';

document.querySelector('.js-btn').addEventListener('click', () => {
  const inputName = document.querySelector('.js-input-name');
  const inputEmail = document.querySelector('.js-input-email');

  fetch('http://localhost:3000/new-user', {
    method: 'GET',
    headers: {
      userName: inputName.value,
      'user-name': inputName.value,
      userEmail: inputEmail.value
    }
  })
    .then(response => {
      console.log(response.headers.get('foo'));
      return response;
    })
    .then(response => response.json())
    .then(responseData => {
      console.log('Data:', responseData);
    });
});
