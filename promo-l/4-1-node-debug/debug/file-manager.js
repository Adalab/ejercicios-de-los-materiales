const fs = require('fs');

const readFile = (fileName, callback) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.log('Error:', err);
    } else {
      callback(data);
    }
  });
};

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, err => {
    if (err) {
      console.log('Error:', err);
    } else {
      callback();
    }
  });
};

module.exports = {
  readFile,
  writeFile
};
