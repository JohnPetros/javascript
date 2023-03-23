function calculateSumAndMedia(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  const media = sum / numbers.length;
  console.log(`A soma dos números de é ${sum}`);
  console.log(`A média dos números de é ${media}`);
}

const numbers = [1.2, 3.4, 5.6, 7.8, 9.0, 2.3, 4.5, 6.7, 8.9, 0.1];

calculateSumAndMedia(numbers);
