'use strict';

// get selected promo

document.querySelector('.js-btn-selected-promo').addEventListener('click', () => {
  const promoId = document.querySelector('.js-promo').value;

  fetch(`http://localhost:3000/promos/${promoId}`)
    .then(response => response.json())
    .then(responseData => {
      console.log('Data:', responseData);
      printJson('.js-get-selected-promo', responseData);
    });
});

// get all promos

document.querySelector('.js-btn-all-promos').addEventListener('click', () => {
  fetch('http://localhost:3000/promos/all')
    .then(response => response.json())
    .then(responseData => {
      console.log('Data:', responseData);
      printJson('.js-get-all-promos', responseData);
    });
});

// helper

const printJson = (selector, jsonData) => {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
};
