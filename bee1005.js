const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("", (A) => {
  rl.question("", (B) => {
    const peso = 11;
    const media = (Number(A) * 3.5 + Number(B) * 7.5) / peso;
    console.log(`MEDIA = ${media.toFixed(5)}`);
    rl.close();
  });
});
