const fs = require('fs'); // import fs from 'fs';

const handleFile = (err, fileContent) => {
  if (err !== null) {
    console.log('Error:', err);
  } else {
    console.log('El contenido del fichero es:', fileContent);
    console.log('La longitud del contenido es:', fileContent.length);
  }
};

fs.readFile('./input.txt', 'utf8', handleFile); // asynchronous

