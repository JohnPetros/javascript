function calculateFatorial() {
  let fatorialSum = 0;
  for (i = 1; i <= 15; i++) {
    let fatorial = 1;
    for (j = 1; j <= i; j++) fatorial *= j;

    fatorialSum += fatorial;
  }

  console.log(`A soma dos fatoriais de 1 a 15 é ${fatorialSum}`);
}
calculateFatorial();
