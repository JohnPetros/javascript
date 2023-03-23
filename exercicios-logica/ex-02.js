function convertFahrenheitToCelsius(F) {
   const C = ((F - 32) * 5) / 9
   console.log(`${F}°F equivale a ${C.toFixed(2)}°C`);
}

convertFahrenheitToCelsius(12)