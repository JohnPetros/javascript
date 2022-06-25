// Função geradora é uma função que retorna um interator que permite com que sua execução seja interrompida usando palavra-chave yield. A execução do interator pode ser controlada através do método next()

/*
function* nome(paramâmetros) {
    expressão
}
*/

function* cores(){
    yield 'Vermelho';
    yield 'Azul';
    yield 'Amarelo';
    yield 'Verde';
    yield 'Roxo';
    yield 'Preto';
    yield 'Branco';
}

for(let cor of cores()){
    console.log(cor)
}

const cor = cores()

console.log(cor.next())
console.log(cor.next())
console.log(cor.next())
console.log(cor.next())
console.log(cor.next())

function * cont(n){
    let c = 0
    while(c<n){
        yield console.log(c)
        c++
    }
}

const ct = cont(10)

console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())
console.log(ct.next())