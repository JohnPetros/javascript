/*
Quando você deve usar o reduce:

Quando baseado no array original, você precisa "reduzir" o array à um valor. 

EX:

[1, 2, 3] -> 6

*/

const numbers = [1, 2, 3]

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumResult)