/*
Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (primeiroValor) => {
  rl.question("", (segundoValor) => {
    rl.question("", (terceiroValor) => {
      rl.question("", (quartoValor) => {
        const dif = primeiroValor * segundoValor - terceiroValor * quartoValor;
        console.log(`DIFERENCA = ${dif}`);
        rl.close();
      });
    });
  });
});
