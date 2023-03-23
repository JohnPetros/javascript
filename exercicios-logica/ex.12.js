function covertRealToDollar(reals, exchangeRate) {
  const dollars = reals / exchangeRate
  console.log(`R$${reals.toFixed(2)} equivale a US$${dollars.toFixed(2)}`);
}

covertRealToDollar(20, 5.29);
