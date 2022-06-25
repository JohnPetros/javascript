// Map é um objeto que itera seus elementos na order da inserção - um loop for...of retorna um array de chave-valor para cada iteração.

let produtos = new Map([
    ['01', 'Mouse'],
    ['02', 'Teclado'],
    ['03', 'Monitor'],
    ['04', 'Gabinete']
])

// produtos.set('01', 'Mouse') // set é o método que define pares chave/valor no objeto Map
//     .set('02', 'Teclado')
//     .set('03', 'Monitor')
//     .set('04', 'Gabinete')

produtos.set('05', 'Memória')

console.log('Tamanho' + produtos.size) // Retorna o número de pares chave/valor no objeto Map

// console.log(produtos.get('01')) // get é o método que retorna o valor associado à chave, ou undefined se não há nenhum valor correspondente
// console.log(produtos.get('02'))
// console.log(produtos.get('03'))
// console.log(produtos.get('04'))

for(produto of produtos){
    console.log(produto[1])
}