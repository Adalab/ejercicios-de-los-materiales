const fs = require('fs');

const writeFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, err => {
    if (err) {
      console.log('Error:', err);
    } else {
      callback();
    }
  });
};

module.exports = writeFile;
