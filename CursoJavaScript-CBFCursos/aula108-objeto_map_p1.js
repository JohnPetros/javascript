// Objetos MAP são um tipo de coleção de dados em que os dados são armazenados em pares, que contêm uma chave única e um valor mapeado para essa chave. E devido à essa singularidade de cada chave armazenada, não há par duplicado na coleção.

let produtos = new Map([
    ['01', 'Mouse'],
    ['02', 'Teclado'],
    ['03', 'Monitor'],
    ['04', 'Gabinete']
])

// produtos.set('01', 'Mouse') // SET é o método que define pares chave/valor no objeto Map
//     .set('02', 'Teclado')
//     .set('03', 'Monitor')
//     .set('04', 'Gabinete')

produtos.set('05', 'Memória')

console.log('Tamanho' + produtos.size) // SIZE é o método que retorna o número de pares chave/valor no objeto Map

// console.log(produtos.get('01')) // GET é o método que retorna o valor associado à chave, ou undefined se não há nenhum valor correspondente
// console.log(produtos.get('02'))
// console.log(produtos.get('03'))
// console.log(produtos.get('04'))

for(produto of produtos){
    console.log(produto[1])
}