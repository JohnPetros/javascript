function calculateInstallment(value, time, rate) {
    return value + (value * (rate / 100) * time)
}

console.log(calculateInstallment(1200, 4, 10));