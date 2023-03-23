function calculateNewWage(monthlyWage, percent) {
  const newWage = monthlyWage * percent / 100
  console.log(`O novo salário é: ${newWage} `);
}

calculateNewWage(2000, 50);
