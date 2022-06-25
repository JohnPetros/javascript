let produtos = new Map([
    ['01', ['Mouse', 'R$10,75']],
    ['02', ['Teclado', 'R$35,90']],
    ['03', ['Monitor', 'R$420,50']],
    ['04', ['Gabinite', 'R$150,00']]
])

produtos.set('05', ['Mouse', 'R$199,90'])

//produtos.clear() //clear é o método que remove todos os pares chave/valor do objeto Map de uma vez

//produtos.delete('03') // delete é o método que remove um determinado par chave/valor do objeto Map

// console.log('Tamanho: ' + produtos.size)

// for(produto of produtos){
//     console.log(produto[1][1])
// }

const alunos = new Map([
    ['01', 'João'],
    ['02', 'Maria'],
    ['03', 'Eduardo'],
    ['04', 'Adriano']
])

function info(chave, valor){
    console.log('Chave: ' + chave + ' - Valor: ' + valor)
}
alunos.forEach(info) // foreach é o método que invoca a função callback para cada par chave-valor presente no objeto Map, na ordem em que foram inseridos.


let iteratorkeys = alunos.keys() // keys é o método que retorna um novo objeto iterator que contém as chaves de cada elemento do objeto Map na ordem em que foram inseridos
console.log(iteratorkeys.next().value)

let iteratorvalues = alunos.values() // values é o método que retorna um novo objeto iterador que contém os valores para cada elemento do objeto Map na ordem em que foram inseridos.
console.log(iteratorvalues.next().value) 


console.log(alunos.has('07') ? 'Aluno encontrado' : 'Aluno não está na lista') // has é o método que retorna um booleano, expressando se a chave indicada existe no objeto Map ou não.