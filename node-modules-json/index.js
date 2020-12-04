const configData = require('./config.json');

console.log('Configuración del servidor', configData);
console.log(`Idioma del servidor: ${configData.lang}`);
console.log(`Formato de fecha: ${configData.dateFormat}`);
