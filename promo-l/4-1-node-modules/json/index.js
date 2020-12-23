const configData = require('./config.json');

// const configData = {
//   "lang": "es-ES",
//   "dateFormat": "dd/mm/yyyy",
//   "coin": "€"
// }

console.log('Configuración del servidor', configData);
console.log(`Idioma del servidor: ${configData.lang}`);
console.log(`Formato de fecha: ${configData.dateFormat}`);
