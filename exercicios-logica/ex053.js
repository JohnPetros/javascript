function calculateFibonacci() {
  let prev = 0,
    current = 1,
    next;

  for (let i = 1; i <= 15; i++) {
    console.log(prev);
    next = prev + current;
    prev = current;
    current = next;
  }
}
calculateFibonacci();
