function getGender(number) {
  switch (number) {
    case "F":
      console.log("Feminino");
      break;
    case "M":
      console.log("Masculino");
      break;
    default:
      console.log("Sexo inválido");
  }
}

getGender('M');
