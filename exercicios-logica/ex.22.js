function convertFeetToMeters(feet) {
  const meters = feet * 0.3048;
  console.log(`${feet} pés equivale a ${meters.toFixed(2)} metros`);
}

convertFeetToMeters(12);
