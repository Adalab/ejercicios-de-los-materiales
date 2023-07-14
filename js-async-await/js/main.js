'use strict';

const img = document.querySelector('.js-img');
let dataApi = {};
 
const loadData = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((data) => {
    dataApi = data;
    img.src = dataApi.message;
  });
}
//loadData(); 

//async declarar el tipo de función
//await 

const loadDataAsync =  async ()=>{
 const response = await fetch('https://dog.ceo/api/breeds/image/random'); 
 const data = await response.json(); 
 dataApi = data;
 img.src = dataApi.message;
}; 

loadDataAsync();