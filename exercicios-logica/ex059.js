function calculateFatorialOfOddNumbers() {
  for (i = 0; i <= 10; i++) {
    if (i % 2 !== 0) {
      let fatorial = 1;
      for (j = 1; j <= i; j++) fatorial *= j;
      console.log(`O fatorial de ${i} é igual a ${fatorial}`);
    }
  }
}

calculateFatorialOfOddNumbers();
