//// O método reduce() é invocado a partir de um array e recebe como parâmetro uma função de callback, que é invocada para cada item e retorna cada valor de cada item de modo a criar um novo array com base em alguma regra, reduzindo os itens do array original a um valor único no array novo. 

let num = [0, 1, 2, 3, 4, 5]
let soma = num.reduce((n1, n2) => {
    console.log(n1 + ' - ' + n2)
    return n1 + n2
})
console.log('----------')
console.log(soma+'\n')

let pessoas = [
    {nome: 'João', idade: 40},
    {nome: 'Bruno', idade: 30},
    {nome: 'Gilda', idade: 25},
    {nome: 'Cleber', idade: 18}
]

let nomes = pessoas.reduce((pessoa1, pessoa2) => {
    pessoa1.push(pessoa2.nome)
    return pessoa1
}, [])
console.log('nomes: ' + nomes)

let idades = pessoas.reduce((pessoa1, pessoa2) => {
    pessoa1.push(pessoa2.idade)
    return pessoa1
}, [])
console.log('idades: ' + idades)