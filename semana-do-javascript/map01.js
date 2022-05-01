/*
Quando você deve usar o map:

Quando você precisa obter um novo array, com a mesma quantidade de itens do array original.

EX:
[1, 2, 3] -> [3, 6, 9]
*/

const numbers = [1, 2, 3]

const doubledNumbers = numbers.map(item => {
    return item * 2
})

console.log(doubledNumbers)

//ou


const doubledNumbersv2 = numbers.map(item => item * 2)

console.log(doubledNumbers)
