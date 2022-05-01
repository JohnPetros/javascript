/*
Quando você deve usar o filter:

Quando você precisa obter um novo array, com uma quantidade de itens menor que a do array original

Ex:

[1, 2, 3] -> [1, 2]

*/

const randomNumbers = [36, 99, 37, 63]

const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)

console.log(numbersGreaterThan37)