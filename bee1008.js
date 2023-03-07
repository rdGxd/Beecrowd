/*
Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (primeiroValor) => {
  rl.question("", (segundoValor) => {
    rl.question("", (terceiroValor) => {
      const number = Number(primeiroValor);
      const hora = Number(segundoValor);
      const salario = Number(terceiroValor);
      const resultado = hora * salario;
      console.log(`NUMBER = ${number}\nSALARY = U$ ${resultado.toFixed(2)}`);
      rl.close();
    });
  });
});
