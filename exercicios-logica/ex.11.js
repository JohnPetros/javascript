function covertDollarToReal(dollars, exchangeRate) {
  const reals = dollars * exchangeRate
  console.log(`${dollars.toFixed(2)} dólares equivale a ${reals.toFixed(2)} reais`);
}

covertDollarToReal(20, 5.29);
