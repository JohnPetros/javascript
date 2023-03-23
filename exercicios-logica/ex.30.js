function getMedia(grade1, grade2) {
  const media = (grade1 + grade2) / 2
  console.log(`Sua média é ${media} e você está `);

  if (media < 7)  console.log('REPROVADO');
  else if (media < 10) console.log('APROVADO');
  else console.log('APROVADO COM DISTINÇÃO');
}

getMedia(7, 8);
