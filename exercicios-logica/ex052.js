function calculateExponation(base, pow) {
  for (let i = 0; i <= pow; i++) {
    if (i === 0) {
      console.log(1);
      continue;
    }
    if (i === 1) {
      console.log(3);
      continue;
    }

    let result = base;
    for (let j = 1; j < i; j++) {
      result *= 3;
    }
    console.log(result);
  }
}
calculateExponation(3, 3);
