// Prototype é uma propiedade que está contido em todo objeto JavaScript. Usando prototype é possível criar ou sobrescrever propriedades e métodos de objetos e classes.

// Object.prototype

class Carro{
    static alerta = true
    constructor(tpCarro, tpComb){ 
        this.tipoCarro = tpCarro//1 = Passeio, 2 = Transporte, 3 = Combate
        this.qtdComb = 100
        this.ligado = false
        this.tipoComb = tpComb//1 = gasolina, 2 = diesel, 3 = etanol
    }
    info(){
        console.log('Quantidade de Combustível.......: ' + this.qtdComb)
        console.log('Ligado..........................: ' + (this.ligado ? 'Sim' : 'Não'))
        console.log('Tipo de Combustível.............: ' + this.tipoComb)
        if(this.tipoCarro == 1){
            console.log('Tipo de Carro...................: Passeio')
        } else if(this.tipoCarro == 2){
            console.log('Tipo de Carro...................: Transporte')
        } else{
            console.log('Tipo de Carro...................: Combate')
        } 
    } 
    set setLigado(l){
        this.ligado = l
    }
    get getLigado(){
        return this.ligado
    }

    set combustível(c){
        if(c < 0 || c > 100){
            console.log('Valor de combustível inválido')
        } else {
            this.comb = c
            console.log('Combustível alterado. Valor atual: ' + this.comb+'%')
        }
    }
    get combustível(){ 
        return this.tpComb
    }
}

class CarroCombate extends Carro {
    constructor(potTiro){
        super(3, 2)
        this.munição = 1000
        this.potênciaTiro = potTiro
        this.blindagem = 100
    }
    info(){
        super.info()
        console.log('Quantidade de Munição...........: ' + this.munição)
        console.log('Potência do Tiro................: ' + this.potTiro)
        console.log('Blindagem.......................: ' + this.blindagem)
        console.log('.........................................\n')
    }
}

class CarroTransporte extends Carro {
    constructor(){
        super(2, 2)
    }
}

Carro.prototype.potência = 500
Carro.prototype.velocidade = 0
Carro.prototype.velocidadeMáxima = 0

Carro.prototype.info2 = function(){
    console.log('Potência........................: ' + this.munição)
    console.log('Velocidade......................: ' + this.potTiro)
    console.log('Velocidade Máxima...............: ' + this.blindagem)
}

let carro1 = new CarroCombate(100)
carro1.setLigado = true
console.log('potência: ' + carro1.potência+'hp')
carro1.info()
carro1.info2()


let carro2 = new CarroTransporte()
console.log('potência: ' + carro2.potência+'hp')
carro2.info()
carro2.info2()