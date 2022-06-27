// O método filter() é invocado a partir de um array e recebe como parâmetro uma função de callback, que é invocada para cada item e retorna cada valor de cada item que passou no teste implementado pela função callback em um novo array.

let numeros = [5, 2, 8, 15, 30, 4, 25, 18, 9]
let maioresq10 = numeros.filter(n => n >= 10)

console.log(numeros)
console.log(maioresq10+'\n')

// function maioresQue10(num){
//     return num >= 10
// }

const maioresQue10 = num => num >= 10

const maioresque10 = numeros.filter(maioresQue10)
console.log(maioresque10+'\n')

let dados = [
    {id: 15},
    {id: 0},
    {id: -10},
    {id: 11},
    {id: null},
    {id: NaN},
    {id: 'undefined'},
    {id: 5.8},
    {},
    {id: 2},
]

//console.log(dados[0].id)

let validos = dados.filter(d => {
    if(typeof(d.id) == 'number' && !isNaN(d.id)){
        return true
    } else {
        return false
    }
})

console.log(validos)