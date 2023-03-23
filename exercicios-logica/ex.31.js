function calculateNewWage(wage, percentage) {
  const increase = wage * percentage / 100;
  const newWage = wage + increase;
  console.log(`antigo salário: R$${wage}
porcentagem: ${percentage}%
aumento de: R$${increase}
novo salário: R$${newWage}
`);
}

function getNewWage(wage) {
  if (wage <= 280) calculateNewWage(wage, 20);
  else if (wage <= 700) calculateNewWage(wage, 15);
  else if (wage <= 1500) calculateNewWage(wage, 10);
  else calculateNewWage(wage, 5);
}

getNewWage(2000);
