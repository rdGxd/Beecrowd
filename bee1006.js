/*
Leia 3 valores, no caso, variáveis A, B e C, que são as três notas de um aluno. A seguir, calcule a média do aluno, sabendo que a nota A tem peso 2, a nota B tem peso 3 e a nota C tem peso 5. Considere que cada nota pode ir de 0 até 10.0, sempre com uma casa decimal.
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (primeiroValor) => {
  rl.question("", (segundoValor) => {
    rl.question("", (terceiroValor) => {
      const peso = 10;
      const media = (Number(primeiroValor) * 2 + Number(segundoValor) * 3 + Number(terceiroValor) * 5) / peso;
      console.log(`MEDIA = ${media.toFixed(1)}`);
      rl.close();
    });
  });
});
