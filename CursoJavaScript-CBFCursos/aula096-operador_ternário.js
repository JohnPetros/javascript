 // Operador ternário é uma outra forma de fazer testes lógicos, sendo uma simplificação da estrutura if-else
        
//teste lógico ? SE verdadeiro : SE falso

let n1 = 10
let n2 = 5
let op = false

if (n1 == n2){
    console.log('igual')
} else {
    console.log('diferente')
}

n1 == n2 ? console.log('igual') : console.log('diferente')

op ? console.log('verdadeiro') : console.log('falso')

const r1 = !op ? 'verdadeiro' : 'falso'
console.log(r1)

const r2 = op && 'verdadeiro'
console.log(r2 + '')
console.log(op && 'verdadeiro')
console.log('')

op ? 
(
    console.log('verdadeiro')
)
:
(
    console.log('falso')
)