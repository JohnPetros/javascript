function calculateEvenNumbersSum() {
  let sum = 0;
  for (i = 50; i <= 70; i++) {
    if (i % 2 === 0) {
      sum += i
    }
  }
  console.log(`O soma dos números de 50 a 70 é igual a ${sum}`);
}

calculateEvenNumbersSum();
