const fileManager = require('./file-manager');

fileManager.readFile('./input.txt', fileContent => {
  const currentDate = new Date().toString();
  const newFileContent = `${currentDate}: ${fileContent}`;
  fileManager.writeFile('./output.txt', newFileContent, () => {
    console.log('The file has been copied!');
  });
});
