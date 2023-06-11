/*
Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

Quatro números inteiros A, B, C e D.
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("", (primeiroValor) => {
  let valores = primeiroValor.split(" ");
  let valorA = Number(valores[0]);
  let valorB = Number(valores[1]);
  let valorC = Number(valores[2]);
  let valorD = Number(valores[3]);
  let sumCeD = valorC + valorD;
  let sumAeB = valorA + valorB;
  if (
    valorB > valorC &&
    valorD > valorA &&
    sumCeD > sumAeB &&
    sumAeB > 0 &&
    sumCeD > 0 &&
    valorA % 2 === 0
  ) {
    console.log("Valores aceitos");
  } else {
    console.log("Valores nao aceitos");
  }
  rl.close();
});
