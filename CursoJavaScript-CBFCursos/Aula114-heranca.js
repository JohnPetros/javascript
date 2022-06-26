// Herança é um conceito da POO em que uma classe consegue herdar comportamentos e características de outra classe

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
            console.log('Tipo de Carro...............: Passeio')
        } else if(this.tipoCarro == 2){
            console.log('Tipo de Carro............: Transporte')
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

    set combustível(c){ // Usa-se a sintaxe SET para determinar que o método em questão é do tipo SETTER
        if(c < 0 || c > 100){
            console.log('Valor de combustível inválido')
        } else {
            this.comb = c
            console.log('Combustível alterado. Valor atual: ' + this.comb+'%')
        }
    }
    get combustível(){ // Usa-se a sintaxe GET para determinar que o método em questão é do tipo GETTER
        return this.tpComb
    }
}

class CarroCombate extends Carro {
    constructor(potTiro){
        super(3, 2) // A palavra-chave SUPER é usada para acessar o construtor ou outro método da classe pai
        this.munição = 1000
        this.potênciaTiro = potTiro
        this.blindagem = 100
    }
    info(){
        super.info()
        console.log('Quantidade de Munição..........: ' + this.munição)
        console.log('Potência do Tiro...............: ' + this.potTiro)
        console.log('Blindagem......................: ' + this.blindagem)
        console.log('.........................................\n')
    }
}

class CarroTransporte extends Carro {
    constructor(){
        super(2, 2)
    }
}

let carro1 = new CarroCombate(100)
carro1.setLigado = true
carro1.info()

let carro2 = new CarroTransporte()
carro2.info()