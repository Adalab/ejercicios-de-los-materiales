const fs = require('fs');

fs.readFile('./input.json', 'utf8', (err, fileContent) => {
  if (err) {
    console.log('Error:', err);
  } else {
    const jsonData = JSON.parse(fileContent);
    console.log(`Título: ${jsonData.title}`);
    console.log(`Contenido: ${jsonData.content}`);
  }
});
