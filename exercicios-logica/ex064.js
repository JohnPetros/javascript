const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const genres = ["M", "F"];
const maritalStatus = ["S", "D", "V"];
let userGenre = "";
let userMaritalStatus = "";

function getUserGenre(userAnswer) {
  return userAnswer === genres[0] ? "Masculino" : "Feminino";
}

function getUserMaritalStatus(userAnswer) {
  switch (userAnswer) {
    case "S":
      return "Solteiro";
    case "C":
      return "Casado";
    case "D":
      return "Divorciado";
    case "V":
      return "Viúvo";
    default:
      return;
  }
}

function askMaritalStatus() {
  console.log(`------------------
| S - Solteiro   |
| C - Casado     |
| D - Divorciado |
| V - Viúvo      |
------------------`);
  rl.question(
    "Informe seu estado civil de acordo com a tabela acima: ",
    (answer) => {
      const userAnswer = answer.trim().toUpperCase();
      if (!maritalStatus.includes(userAnswer)) {
        console.log(
          "Resposta inválida: a resposta tem que ser conforme a tabela"
        );
        askMaritalStatus();
        return;
      }
      userMaritalStatus = getUserMaritalStatus(userAnswer);
      console.log(
        `Seu sexo é ${userGenre} e seu estado civil é ${userMaritalStatus}`
      );
    }
  );
}

function askGenre() {
  rl.question("Informe seu gênero: (M/F) ", (answer) => {
    const userAnswer = answer.trim().toUpperCase();
    if (!genres.includes(userAnswer)) {
      console.log("Resposta inválida: a resposta tem que ser M ou F");
      askGenre();
      return;
    }
    userGenre = getUserGenre(userAnswer);
    askMaritalStatus();
  });
}

askGenre();
