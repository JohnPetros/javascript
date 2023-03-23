const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];

function getGreatestNumber(numbers) {
  let greatestNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > greatestNumber) greatestNumber = numbers[i];
  }
  return greatestNumber;
}

function getSmallestNumber(numbers) {
  let smallestNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber) smallestNumber = numbers[i];
  }
  return smallestNumber;
}

function askNumber() {
  rl.question("Informe um número: ", (answer) => {
    const number = answer.trim();
    if (isNaN(number) || number == "") {
      console.log("Número inválido");
      askNumber();
      return;
    }

    if (number < 0) {
      console.log(
        `O maior número entre ${numbers} é ${getGreatestNumber(numbers)}`
      );
      console.log(
        `O menor número entre ${numbers} é ${getSmallestNumber(numbers)}`
      );
      return;
    }
    numbers.push(+number);
    askNumber();
  });
}

askNumber();
