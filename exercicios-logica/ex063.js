const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateDivision(dividend, divisor) {
  let _dividend = dividend
  let result = 0;
  while (_dividend >= divisor) {
    _dividend -= divisor;
    result++;
  }
  console.log(
    `A divisão entre ${dividend} e ${divisor} é ${result} porque ${divisor} cabe ${result} vezes em ${dividend}`
  );
}

function isValidNumber(value) {
  const number = value.trim();
  if (isNaN(number) || number == "") {
    console.log("Número inválido");
    return false;
  }
  return true;
}

function askDivisionData() {
  rl.question("Informe um dividendo: ", (answer) => {
    if (!isValidNumber(answer)) {
      askDivisionData();
      return;
    }

    const dividend = answer;

    rl.question("Informe um divisor: ", (answer) => {
      if (!isValidNumber(answer)) {
        askDivisionData();
        return;
      }

      const divisor = answer;

      calculateDivision(+dividend, +divisor);
    });
  });
}

askDivisionData();
