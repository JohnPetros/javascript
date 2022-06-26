// A palavra-chave static define um método estático para a classe. Métodos estáticos não são chamados na instâncias da classe. Em vez disso, eles são chamados na própria classe. Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.

// Todos os objetos instanciados da classe podrão acessar e utilizar o mesmo método estático

class Carro{
    static alerta = true
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
        console.log('Comnustível.: ' + (Carro.alerta ? 'Está em alerta' : 'Não está em alerta'))
        console.log('.........................')
    } 
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
    get alerta(){
        return Carro.alerta
    }
    set alerta(t){
        Carro.alerta = t
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

carro1.combustível = 100
//carro4.alerta = false
Carro.alerta = false

carro1.info()
carro2.info()
carro3.info()
carro4.info()