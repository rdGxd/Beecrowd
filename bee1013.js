/*
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:

MaiorAB = (a+b+abs(a-b)) / 2

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (primeiroValor) => {
  const split = primeiroValor.split(" ");
  const valorA = Number(split[0]);
  const valorB = Number(split[1]);
  const valorC = Number(split[2]);
  const maiorAB = (valorA + valorB + Math.abs(valorA - valorB)) / 2;
  const maiorValor = (maiorAB + valorC + Math.abs(maiorAB - valorC)) / 2;
  console.log(`${maiorValor} eh o maior`);
  rl.close();
});
