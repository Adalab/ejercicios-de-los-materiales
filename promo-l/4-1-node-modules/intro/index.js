const poligonArea = require('./polygon-area');
// import poligonArea from './polygon-area';

const triangleBase = 2;
const triangleHeight = 3;
const triangleArea = poligonArea.getTriangleArea(triangleBase, triangleHeight);

console.log(
  `Un triángulo de base ${triangleBase} y de altura ${triangleHeight} tiene un área de ${triangleArea}`
);

const squareBase = 2;
const squareArea = poligonArea.getSquareArea(squareBase);

console.log(`Un cuadrado de base ${squareBase} tiene un área de ${squareArea}`);
