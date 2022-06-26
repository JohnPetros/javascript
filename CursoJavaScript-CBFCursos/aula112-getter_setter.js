// Getter é um tipo de método que permite obter o valor de uma determinada propriedade.
// Setter é um tipo de método que permite definir o valor de uma determinada propriedade.

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
        console.log('Comnustível.: ' + this.comb+'%')
        console.log('.........................')
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
    set combustível(v){ // Usa-se a sintaxe SET para determinar que o método em questão é do tipo SETTER
        if(v < 0 || v > 100){
            console.log('Valor de combustível inválido')
        } else {
            this.comb = v
            console.log('Combustível alterado. Valor atual: ' + this.comb+'%')
        }
    }
    get combustível(){ // Usa-se a sintaxe GET para determinar que o método em questão é do tipo GETTER
        return this.comb
    }
}

let carro1 = new Carro('Honda', 'HRV', 'Prata')
let carro2 = new Carro('VW', 'Golf', 'Vermelho')
let carro3 = new Carro('GM', 'Camaro', 'Amarelo')
let carro4 = new Carro('Ford', 'Mustang', 'Preto')

carro1.ligar()
console.log('valor anterior do combustível: ' + carro1.combustível+'%')
carro1.combustível = 110
carro1.info()

carro2.info()
carro3.info()
carro4.info()