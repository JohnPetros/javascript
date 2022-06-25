// Parâmetros Rest são parâmetros que podem receber uma quantidade indefinida de valores, passando-o para a função em forma de array

function soma(...num){
    let res = 0
    for(n of num){
        res += n
    }
    return res
}

console.log(soma(1, 2, 3, 4, 5, 6, 8))