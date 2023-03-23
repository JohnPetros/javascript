function calculateVel(distance, time) {
  const vel = (distance * 1000) / (time * 60);
  console.log(`A velocidade do projétil é ${vel.toFixed(2)}km/m`);
}

calculateVel(400, 250);
