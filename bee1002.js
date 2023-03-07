const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (raio) => {
  const pi = 3.14159;
  const area = pi * raio ** 2;
  console.log(`A=${area.toFixed(4)}`);
  rl.close();
});

/*
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const raio = Number(lines.shift());
const pi = 3.14159;
const area = pi * raio ** 2;
console.log(`A=${area.toFixed(4)}`)
*/
