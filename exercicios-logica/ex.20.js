function calculateVolume(ray) {
  const volume = (4 / 3 ) * Math.PI * (ray ** 3);
  console.log(`O volume da esfera é ${volume.toFixed(2)}cm³`);
}

calculateVolume(250);
