function calculateOddNumberSum() {
  let sum = 0;
  for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) sum += 1
  };

  console.log(sum);
}

calculateOddNumberSum();
