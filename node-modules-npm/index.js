const lodash = require('lodash');

const arrayA = [1, 2, 3, 4];
const arrayB = [2, 4, 6, 8];
const intersection = lodash.intersection(arrayA, arrayB);

console.log(`La intersección de los arrays ${arrayA} y ${arrayA} es ${intersection}`);
