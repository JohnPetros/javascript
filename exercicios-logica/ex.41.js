function sortNumbers(...numbers) {
  const ascOrder = [...numbers].sort((a, b) => a - b);
  const descOrder = [...numbers].sort((a, b) => b - a);

  console.log(
    `A ordem crescente é ${ascOrder}
A ordem decrescente é ${descOrder}`
  );
}

sortNumbers(25, 10, 15);
