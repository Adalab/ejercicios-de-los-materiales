// const lodash = require('lodash');
const _ = require('lodash');

const arrayA = [1, 2, 3, 4];
const arrayB = [2, 4, 6, 8];
// const intersection = lodash.intersection(arrayA, arrayB);
const intersection = _.intersection(arrayA, arrayB);

console.log(`La intersección de los arrays ${arrayA} y ${arrayB} es ${intersection}`);
