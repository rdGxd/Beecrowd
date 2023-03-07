/*
Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre elas e atribua à variável SOMA. A seguir escrever o valor desta variável.
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (primeiroValor) => {
  rl.question("", (segundoValor) => {
    const soma = Number(primeiroValor) + Number(segundoValor);
    console.log(`SOMA = ${soma}`);
    rl.close();
  });
});
