function showWeekday(number) {
  const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  console.log(
    number < 1 || number > 7 ? "número inválido" : weekdays[number - 1]
  );
}

showWeekday(7);
