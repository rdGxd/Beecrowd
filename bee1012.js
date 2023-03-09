/*
Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
a) a área do triângulo retângulo que tem A por base e C por altura.
b) a área do círculo de raio C. (pi = 3.14159)
c) a área do trapézio que tem A e B por bases e C por altura.
d) a área do quadrado que tem lado B.
e) a área do retângulo que tem lados A e B.
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
  const pi = 3.14159;
  const triangulo = (valorA * valorC) / 2;
  const circulo = valorC ** 2 * pi;
  const trapezio = ((valorA + valorB) * valorC) / 2;
  const quadrado = valorB ** 2;
  const retangulo = valorA * valorB;
  console.log(
    `TRIANGULO: ${triangulo.toFixed(3)}\nCIRCULO: ${circulo.toFixed(
      3
    )}\nTRAPEZIO: ${trapezio.toFixed(3)}\nQUADRADO: ${quadrado.toFixed(
      3
    )}\nRETANGULO: ${retangulo.toFixed(3)}`
  );
  rl.close();
});
