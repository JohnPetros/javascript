// O método map() é invocado a partir de um array e recebe como parâmetro uma função de callback, que é invocada para cada item e retorna cada valor de cada item em um novo array.

let num = [1, 4, 9, 16, 25]

let raizes = num.map(Math.sqrt)

// for(raiz of raizes)
//     console.log(raiz)

for(let i = 0; i < 5; i++){
    console.log('Número: ' + num[i] + ' - Raiz: ' + raizes[i])
}

console.log('----------------------------')

let dobros = num.map((n) => n * 2)

for(let i = 0; i < 5; i++){
    console.log('Número: ' + num[i] + ' - Dobro: ' + dobros[i])
}