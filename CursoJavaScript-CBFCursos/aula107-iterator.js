// Iterator (Iterador) permite manipular a iteração de coleções de valores manualmente por meio do uso do método next()

let num = [5, 4, 3, 2, 1]
// for (n of num)
//     console.log(n)

let it = num[Symbol.iterator]()
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
let v = it.next().value
console.log('quinto valor: ' + v + '\n')

let numeros = [1, 2, 3, 4, 5]
let iterator = num[Symbol.iterator]()
for(let i=0; i<num.length; i++){
    let valor = iterator.next().value
    valor % 2 == 0 ? console.log("Ímpar") : console.log('Par') 
}