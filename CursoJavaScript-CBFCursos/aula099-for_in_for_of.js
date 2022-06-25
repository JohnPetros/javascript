// For in é um estrutura de loop voltada para percorrer matriz

const aluno = {nome: 'Bruno', sobrenome: 'Campos'}
const notas = {n1: 80, n2: 75, n3: 92, n4: 85}
const info = {...aluno, ...notas}

for(var dado in aluno){
    console.log(dado)
}

console.log('')

for(var dado in info){
    console.log(info[dado])
}

console.log('')

// For of é um estrutura de loop voltada para percorrer vetor

let numeros = [100, 8, 75, 30, 64, 47, 98, 81, 60]
let maiorq60 = 0
let menorq60 = 0

for(var n of numeros){
    console.log(n)
    n > 60 ? maiorq60++ : menorq60++
}

console.log('Números maiores que 60: ' + maiorq60)
console.log('Números menores que 60: ' + menorq60)