/*
Dois carros (X e Y) partem em uma mesma direção. O carro X sai com velocidade constante de 60 km/h e o carro Y sai com velocidade constante de 90 km/h.

Em uma hora (60 minutos) o carro Y consegue se distanciar 30 quilômetros do carro X, ou seja, consegue se afastar um quilômetro a cada 2 minutos.

Leia a distância (em km) e calcule quanto tempo leva (em minutos) para o carro Y tomar essa distância do outro carro.
*/

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (primeiroValor) => {
  const carroX = 60;
  const resultado = (carroX * Number(primeiroValor)) / 30;
  console.log(`${resultado} minutos`);
  rl.close();
});
