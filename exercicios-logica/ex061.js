const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let houseArea = 0;

function calculateRoomArea(roomName, roomLength, roomHeight) {
  const area = roomLength * roomHeight;
  console.log(`${roomName} possui área de ${area}m²`);
  houseArea += area;
}

function askToContinue() {
  rl.question("Deseja continuar? (Sim/Não) ", (answer) => {
    if (!["sim", "não", "nao"].includes(answer.trim().toLocaleLowerCase())) {
      console.log(`Resposta inválida`);
      askToContinue();
    } else if (answer === "sim") {
      calculateHouseArea();
    } else {
      console.log(`A residência possui ${houseArea}m² no total`);
    }
  });
}

function calculateHouseArea() {
  rl.question("Qual o nome do cômodo? ", (roomName) => {
    rl.question("Qual o comprimento do cômodo? (m) ", (roomLength) => {
      rl.question("Qual a altura do cômodo? (m) ", (roomHeight) => {
        calculateRoomArea(+roomName, +roomLength, +roomHeight);
        askToContinue();
      });
    });
  });
}

calculateHouseArea();
