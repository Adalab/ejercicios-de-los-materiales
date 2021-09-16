const readFile = require('./read-file');
const writeFile = require('./write-file');

readFile('./input.txt', fileContent => {
  const currentDate = new Date().toString();
  const newFileContent = `${currentDate}: ${fileContent}`;
  writeFile('./output.txt', newFileContent, () => {
    console.log('The file has been copied!');
  });
});
