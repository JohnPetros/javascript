function calculateDivisiblesFor4AndBelow200() {
  let sum = 0;
  for (let i = 0; i < 200; i++) {
    if (i % 4 === 0 && i < 200) sum += 1
  };

  console.log(sum);
}

calculateDivisiblesFor4AndBelow200();
