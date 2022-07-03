// Funções Construtoras são um tipo de função anônima que são instanciadas com o operador new, tendo como parâmetros duas strings, uma indicando as variáveis que serão passadas para a função, e outra indicando o corpo (bloco de código) da função.


let soma = new Function('n1, n2', 'return n1 + n2')
console.log(soma(8, 2))

// Funções Construtoras tem o objetivo de servir de molde para a criação de objetos.
//Para construir objetos, funções construtoras precisam ser instanciadas pelo operador new. O this dentro delas se referencia ao objeto criado a partir delas.

function Person(name, age){
    this.name = name
    this.age = age
    this.walk = function(){
        return this.name + ' está andando'
    }
    

}

const mayk = new Person('Mayk', 36)
const joao = new Person('João', 20)
console.log(mayk)
console.log(joao)
console.log(joao.walk())
