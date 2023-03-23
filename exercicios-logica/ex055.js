function calculateGrainsAmount() {
  let grains = 1;
  let square = 1
  while (square < 64) {
    console.log(`No quadrado ${square} há ${grains} grãos`);
    grains += grains + 1

    square++;
  }
 
}
calculateGrainsAmount();
