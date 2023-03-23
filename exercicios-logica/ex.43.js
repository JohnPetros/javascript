function calculateQuadricEquation(a, b, c) {
  if (a === 0) {
    console.log(`Não é possível calcular: valor de a é igual a 0`);
    return;
  }

  const delta = Math.pow(-b, 2) - 4 * a * c;
  
  if (delta < 0) console.log(`A equação não possui raízes reais`);
  else if (delta > 0) console.log(`A equação possui duas raízes reais`);
  else console.log(`A equação possui apenas uma raíz real`);
}

calculateQuadricEquation(4, -8, 0);
