function calculateCelciusToFahreheit() {
  let C = 10;
  while (C < 100) {
    const F = C * 9 / 5 + 32
    console.log(`${C}C° é igual a ${F}°F`);
    C += 10;
  }
 
}
calculateCelciusToFahreheit();
