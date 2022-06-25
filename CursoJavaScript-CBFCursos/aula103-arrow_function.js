// Arrow Function (Função de Seta) é um tipo de função anônima na qual um conjunto de parâmetros é passado diretamente para uma expressão por meio da simbologia de uma seta (=>). 

//(parâmetros) => expressão

const soma = (...num) => {
    let r = 0
    for(n of num)
        r += n
    return r
}
console.log(soma(2, 3, 3, 5, 4, 7))


const par = (...num) => {
    if(num % 2 == 0)
        return true
    else
        return false
}
console.log(par(3) ? 'É par' : 'Não é Par')


const impar = num => num % 2 == 0 ? false : true
console.log(impar(3))