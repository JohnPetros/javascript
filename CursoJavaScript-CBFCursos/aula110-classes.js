// Programação Orientada a Objetos (POO) é um paradigma de programação baseado no conceito de "objetos", que podem conter dados na forma de campos, também conhecidos como atributos, e códigos, na forma de procedimentos, também conhecidos como métodos.

// Classe é uma estrutura que descreve estados e comportamentos de um determinado objeto, servindo como um molde ou esqueleto para a construção (instância) de um objeto. 

// class [nome da classe] {
  // [corpo da classe]
//}

class Carro{
    // cor = 'Vermelho'
    constructor(c){ // construtor é um método especial para criar e inicializar um objeto criado a partir de uma classe
        // this.cor = 'Vermelho'
        this.cor = c
        console.log('Olá, sou um novo carro: ' + this.cor)
    }
}

let carro1 = new Carro('Vermelho')
let carro2 = new Carro('Azul')
let carro3 = new Carro('Verde')
let carro4 = new Carro('Amarelo')