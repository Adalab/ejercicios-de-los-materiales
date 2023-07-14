'use strict';

let api_token = ""; 

// post new user
document.querySelector('.js-btn-post-new-user').addEventListener('click', () => {
  const inputName = document.querySelector('.js-input-name');
  const inputPass = document.querySelector('.js-input-email');

  // create body params
  const bodyParams = {
    email: inputName.value,
    password: inputPass.value
  };

  fetch('http://localhost:4000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyParams)
  })
    .then(response => response.json())
    .then(responseData => {
      console.log('Server response:', responseData);
      api_token= responseData.token; 
      printJson('.js-post-new-user-result', responseData);
    });
});



// get users data

document.querySelector('.js-btn-get-users').addEventListener('click', () => {
  fetch('http://localhost:4000/articles',
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', 
      'Authorization': api_token
    }})
    .then(response => response.json())
    .then(responseData => {
      console.log('Server response:', responseData);
      printJson('.js-get-users-result', responseData);
    });
});


document.querySelector('.js-btn-close-session').addEventListener('click', () => {
  fetch('http://localhost:4000/api/logout',
  {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', 
      'Authorization': api_token
    }})
    .then(response => response.json())
    .then(responseData => {
      console.log('Server response:', responseData);
      api_token = ""; 
      printJson('.js-close-session-result', responseData);
    });
});


// helper

const printJson = (selector, jsonData) => {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
};
