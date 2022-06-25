// Objetos são como uma espécie de "super variáveis" que armazenam uma "coleção de valores" referenciados por nome, e que podem ser recuperados para serem utilizados em diversas outras partes de um programa

// Cada item dessa "coleção de valores", é chamado de propriedade. Cada propriedade é composta por um par de "nome: valor". Quando uma propriedade armazena uma função, ela se torna o que chamamos de método.

const Carro = {
    marca: 'VW',
    modelo: 'Golf',
    info: function(){
        console.log('Marca: ' + this.marca)
        console.log('Modelo: ' + this.modelo)
    }
}

// console.log(Carro.marca)
// console.log(Carro.modelo)
// console.log(Carro.['marca'])
// console.log(Carro.['modelo'])

const c2 = Object.create(Carro)
const c3 = Object.create(Carro)

Carro.marca = 'Honda'
Carro.modelo = 'HRV'

c2.marca = 'Ford'
c2.modelo = 'Ranger'

c3.marca = 'Fiat'
c3.modelo = 'Toro'

Carro['marca'] = 'GM'
Carro['modelo'] = 'Camaro'

Carro.info()
c2.info()
c3.info()

console.log('')

const Veiculo = {
    marca: 'VW',
    modelo: 'Golf',
    info: function(){
        console.log('Marca: ' + this.marca)
        console.log('Modelo: ' + this.modelo)
    }
}

const Características = {
    cor: 'Cinza',
    câmbio: 'Automático'
}

delete Características.cor

const Automóvel = Object.assign(Veiculo, Características)

console.log(Automóvel)
Automóvel.info()

let {marca, modelo} = Automóvel

marca = 'Honda'
modelo = 'HRV'

console.log(marca)
console.log(modelo)
console.log(Automóvel)
