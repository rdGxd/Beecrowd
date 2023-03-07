/*
Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (primeiroValor) => {
  rl.question("", (segundoValor) => {
    rl.question("", (terceiroValor) => {
      const nome = primeiroValor;
      const salario = Number(segundoValor);
      const totVendas = (Number(terceiroValor) * 15) / 100;
      const resultado = totVendas + salario;
      console.log(`TOTAL = R$ ${resultado.toFixed(2)}`);
      rl.close();
    });
  });
});
