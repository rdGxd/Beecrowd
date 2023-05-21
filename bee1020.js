/*
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com objetivo de testar raciocínio matemático simples.
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("", (primeiroValor) => {
  const anos = Math.floor(primeiroValor / 365);
  primeiroValor %= 365;
  const meses = Math.floor(primeiroValor / 30);
  primeiroValor %= 30;
  const dias = primeiroValor;
  console.log(`${anos} ano(s)\n${meses} mes(es)\n${dias} dia(s)`);
  rl.close();
});
