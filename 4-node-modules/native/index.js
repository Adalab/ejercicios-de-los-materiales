const fs = require('fs');

const handleFile = (err, fileContent) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log(fileContent);
  }
};

fs.readFile('./input.txt', 'utf8', handleFile);
