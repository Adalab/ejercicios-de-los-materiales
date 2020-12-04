const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, fileContent) => {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log(fileContent);
  }
});
