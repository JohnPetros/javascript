function formatValue(value) {
  return String(value.toFixed(2)).replace(".", ",");
}

function calculateNewWage(grossWage, IRDescount) {
  let IR = 0;
  if (IRDescount) IR = grossWage * IRDescount;
  const INSS = grossWage * 0.1;
  const FGTS = grossWage * 0.11;
  const totalDecountedValue = IR + INSS;
  const netWage = grossWage - totalDecountedValue;

  console.log(`Salário bruto:      R$${formatValue(grossWage)}`);
  if (IRDescount) console.log(`(-) IR (${IRDescount}%):     R$${formatValue(IR)}`);
  console.log(`(-) INSS (10%):     R$${formatValue(INSS)}`);
  console.log(`(-) FGTS (11%):     R$${formatValue(FGTS)}`);
  console.log(`Total de descontos: R$${formatValue(totalDecountedValue)}`);
  console.log(`Salário líquido:    R$${formatValue(netWage)}`);
}

function showPayroll(valuePerHour, totalHours) {
  const grossWage = valuePerHour * totalHours;

  if (grossWage <= 900) calculateNewWage(grossWage, null);
  else if (grossWage <= 1500) calculateNewWage(grossWage, 0.05);
  else if (grossWage <= 2500) calculateNewWage(grossWage, 0.1);
  else calculateNewWage(grossWage, 0.2);
}

showPayroll(220, 5);
