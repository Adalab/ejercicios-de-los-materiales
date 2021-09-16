'use strict';

// post new user

document.querySelector('.js-btn-header-params').addEventListener('click', () => {
  fetch('http://localhost:3000/user', {
    method: 'POST', // o GET, PUT, PATCH...
    headers: {
      unParametroEnLaCabecera: 'Hola mundo',
      'otro-parametro-de-la-cabecera': 123,
      otroParametroMas: 'Soy un dato'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
});
