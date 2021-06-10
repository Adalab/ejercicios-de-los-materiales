const fs = require('fs'); // import fs from 'fs';

const handleFile = (err, fileContent) => {
  if (err !== null) {
    console.log('Error:', err);
  } else {
    console.log('El contenido del fichero es:', fileContent);
    console.log('La longitud del contenido es:', fileContent.length);
  }
};

fs.readFile('./input.foo', 'utf8', handleFile); // asynchronous

// listen event

// const btnElement = document.querySelector('.btn');

// const handleClick = ev => {
//   console.log(ev);
// };

// btnElement.addEventListener('click', handleClick);
