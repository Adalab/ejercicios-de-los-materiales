// Exmaple 1

const math = require('./math');

const result = math.add(1, 2);
console.log(`La suma de 1 + 3 es ${result}`);

// Example 2

const numbers = [];

for (let index = 0; index < 10; index++) {
  const randomNumber = Math.round(Math.random() * 10);
  numbers.push(randomNumber);
}

console.log(`Los números aleatorios son`, numbers);

// Example 3

setInterval(() => {
  const date = new Date();
  console.log(`La fecha actual es ${date}`);
}, 1000);
