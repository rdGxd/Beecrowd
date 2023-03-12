/*
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (primeiroValor) => {
  rl.question("", (segundoValor) => {
    const salvarValor1 = primeiroValor.split(" ");
    const salvarValor2 = segundoValor.split(" ");
    const x1 = Number(salvarValor1[0]);
    const y1 = Number(salvarValor1[1]);
    const x2 = Number(salvarValor2[0]);
    const y2 = Number(salvarValor2[1]);
    const resultado = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    console.log(resultado.toFixed(4));
    rl.close();
  });
});
