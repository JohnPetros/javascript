function calculateCubeRoots() {
  for (let i = 0; i <= 15; i++) {
    if (i === 0) {
      console.log(1);
      continue;
    }
    if (i === 1) {
      console.log(3);
      continue;
    }

    let result = 3;
    for (let j = 1; j < i; j++) {
      result *= 3;
    }
    console.log(result);
  }
}
calculateCubeRoots();
