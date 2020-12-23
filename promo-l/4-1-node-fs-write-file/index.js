const fs = require('fs');

const fileContent =
  'En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor...';

const handleWriteFile = err => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('The file has been saved!');
  }
};

fs.writeFile('./output.txt', fileContent, handleWriteFile);
