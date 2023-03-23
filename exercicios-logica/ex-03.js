function calculateVolume(height, ray) {
    return (Math.PI * ray ** 2 * height).toFixed(2)
}

console.log(calculateVolume(4, 12));