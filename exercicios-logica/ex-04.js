function calculateTravel(velocity, time) {
    const distance = time * velocity;
    const litters = distance / 12;
    return `tempo gasto: ${time} horas
vewlocidade percorrida: ${velocity}km/h
quantidade de litros consumida: ${litters}l`
}

console.log(calculateTravel(400, 12));