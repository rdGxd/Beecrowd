/*
Calcule o consumo médio de um automóvel sendo fornecidos a distância total percorrida (em Km) e o total de combustível gasto (em litros).
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (primeiroValor) => {
  rl.question("", (segundoValor) => {
    const resultado = Number(primeiroValor) / Number(segundoValor);
    console.log(`${resultado.toFixed(3)} km/l`);
    rl.close();
  });
});
