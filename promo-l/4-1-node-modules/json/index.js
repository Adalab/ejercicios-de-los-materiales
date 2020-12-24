const moment = require('moment');
const configData = require('./config-es.json');

// 1º Node imports file
// 2º JSON.parse()
// const configData = {
//   "lang": "es-ES",
//   "dateFormat": "dd/mm/yyyy",
//   "coin": "€"
// }

console.log('Configuración del servidor', configData);
console.log(`Idioma del servidor: ${configData.lang}`);
console.log(`Formato de fecha: ${configData.dateFormat}`);
console.log('Hoy es', moment().format(configData.dateFormat));
