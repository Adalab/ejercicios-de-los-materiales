// get users data

document.querySelector('.js-btn-get-users').addEventListener('click', () => {
  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(responseData => {
      console.log('Data:', responseData);
      printJson('.js-get-users-result', responseData);
    });
});

// post new user

document.querySelector('.js-btn-post-new-user').addEventListener('click', () => {
  const requestData = {
    userName: document.querySelector('.js-username').value
  };

  fetch('http://localhost:3000/new-user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  })
    .then(response => response.json())
    .then(responseData => {
      console.log('Data:', responseData);
      printJson('.js-get-post-new-user-result', responseData);
    });
});

// helper

const printJson = (selector, jsonData) => {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
};
