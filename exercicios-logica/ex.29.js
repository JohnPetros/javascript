function getShift(letter) {
  switch (letter) {
    case "V":
      console.log("Bom dia! Seu turno é vespertino");
      break;
    case "N":
      console.log("Bom noite! Seu turno é noturno");
      break;
    default:
      console.log("Valor inválido");
  }
}

getShift("M");
