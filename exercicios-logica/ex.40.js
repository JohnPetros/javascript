function verifyLetter(letter) {
  const vogals = ["A", "E", "I", "O", "U"];

  console.log(
    `A letra ${letter} é uma ${vogals.includes(letter.toUpperCase()) ? "vogal" : "consoante"}`
  );
}

verifyLetter('u');
