const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (A) => {
  rl.question("", (B) => {
    let X = Number(A) + Number(B);
    console.log(`X = ${X}`);
    rl.close();
  });
});


/*
const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const A = Number(lines.shift());
const B = Number(lines.shift());
const X = A + B;
console.log(`X = ${X}`)
*/