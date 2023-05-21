// Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato horas:minutos:segundos.

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("", (primeiroValor) => {
  const horas = Math.floor(primeiroValor / 3600);
  primeiroValor %= 3600;
  const minutos = Math.floor(primeiroValor / 60);
  primeiroValor %= 60;
  const segundos = primeiroValor;
  console.log(`${horas}:${minutos}:${segundos}`);
  rl.close();
});
