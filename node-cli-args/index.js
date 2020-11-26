// 1º Open terminal
// 2º Run node index.js 3 5

console.log('Node arguments array:', process.argv);

const arg2 = parseInt(process.argv[2]);
const arg3 = parseInt(process.argv[3]);

console.log(`${arg2} + ${arg3} = ${arg2 + arg3}`);
