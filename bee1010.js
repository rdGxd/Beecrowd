/*
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (primeiroValor) => {
  rl.question("", (segundoValor) => {
    const primeiroItem = primeiroValor.split(" ");
    const segundoItem = segundoValor.split(" ");
    const quantItem1 = Number(primeiroItem[1]);
    const quantItem2 = Number(segundoItem[1]);
    const valorItem1 = Number(primeiroItem[2]);
    const valorItem2 = Number(segundoItem[2]);
    const resultado = quantItem1 * valorItem1 + quantItem2 * valorItem2;
    console.log(`VALOR A PAGAR: R$ ${resultado.toFixed(2)}`);
    rl.close();
  });
});
