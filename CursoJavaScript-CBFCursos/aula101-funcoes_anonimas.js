// Funções anônimas são funções que não possuem um nome associado a elas

const alo = function(){
    return 'Alô, mundo'
}

let soma = function(...num){
    let res = 0
    for(n of num){
        res += n
    }
    return res
}
let s = soma

console.log(alo())

console.log(s(1, 2, 3))
console.log(s(1, 2))
console.log(s)