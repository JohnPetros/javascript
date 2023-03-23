function showSmallestNumber(...numbers) {
  const largestNumber = Math.min(...numbers);
  console.log("O menor número é " + largestNumber);
}
showSmallestNumber(6, 4, 10)
