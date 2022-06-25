// Função construtora é um tipo de função anônima na qual sua estrutura de código é definida como um conjunto de parâmetros na forma de string

let soma = new Function('n1, n2', 'return n1 + n2')

console.log(soma(8, 2))
