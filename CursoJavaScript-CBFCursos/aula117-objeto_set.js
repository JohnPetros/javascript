// Objetos SET são coleções de valores nas quais é possível iterar os elementos em ordem de inserção. Um valor no Set deve ser único

let meuSet = new Set([1, 2, 3])

// Map -> set

meuSet.add(4) // ADD é o método que adiciona um valor no Set
meuSet.add(1)
meuSet.add(6)

console.log('tamanho: ' + meuSet.size+'\n')

for(n of meuSet){
    console.log(n)
}