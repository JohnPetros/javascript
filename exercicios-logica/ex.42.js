function isTriangle(_, index, sides) {
  const restSides = [...sides];
  const currentSide = restSides.splice(index, 1)[0];
  const sum = restSides.reduce((total, currentvalue) => total + currentvalue);
  return sum > currentSide;
}

function verifyTriangle(...sides) {
  const _isTriangle = sides.some(isTriangle);

  if (!_isTriangle || sides.length !== 3) {
    console.log("Não é possível formar um triângulo");
    return;
  }

  let triangleType = "";

  if (sides.every((side, index) => side !== sides[index === 2 ? 0 : index + 1]))
    triangleType = "escaleno";
  else if (sides.every((side) => side === sides[0]))
    triangleType = "equilátero";
  else
     triangleType = "isósceles";

  console.log("Se trata de um triângulo " + triangleType);
}

verifyTriangle(25, 15, 25);
