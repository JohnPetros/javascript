let valores = [0, 1, 7, 4, 2,8]

for(let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

console.log('OU')

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}