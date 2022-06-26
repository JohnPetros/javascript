// Uma propriedade é uma associação entre um nome (ou chave) e um valor dentro de um objeto. Um valor de propriedade pode ser uma função, que é então considerada um método do objeto.

class Carro{
    constructor(marca, modelo, cor){ 
        this.marca = marca
        this.modelo = modelo
        this.cor = cor
        this.ligado = false
        this.km = 0
        this.comb = 10
    }
    info(){
        console.log('Marca.......: ' + this.marca)
        console.log('Modelo......: ' + this.modelo)
        console.log('Cor.........: ' + this.cor)
        console.log('Ligado......: ' + (this.ligado ? 'SIM' : 'NÃO'))
        console.log('KM..........: ' + this.km)
        console.log('Comnustível.: ' + this.comb)
        console.log('.........................')
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
}

let carro1 = new Carro('Honda', 'HRV', 'Prata')
let carro2 = new Carro('VW', 'Golf', 'Vermelho')
let carro3 = new Carro('GM', 'Camaro', 'Amarelo')
let carro4 = new Carro('Ford', 'Mustang', 'Preto')

// carro1.cor = 'Preto'
// carro2.cor = 'Branco'
// carro3.cor = 'Prata'
// carro4.cor = 'Laranja'

carro1.ligar()

carro1.info()
carro2.info()
carro3.info()
carro4.info()