const height = document.querySelector('input#height')
const weight = document.querySelector('input#weight')
const button = document.querySelector('button')
const result = document.querySelector('#result')
let imc, imcResult, message

const calculateImc = (weight, height) => {
    if(weight.value == '' || height.value == ''){
        imc = 0
    } else {
        imc = weight.value / (Math.pow(height.value, 2))
        if (imc < 18.5) {
            imcResult = 'Abaixo do Peso'
        } else if (imc < 24.9) {
            imcResult = 'com Peso Normal'
        } else if (imc < 29.9) {
            imcResult = 'com Sobrepeso'
        } else if (imc < 34.9) {
            imcResult = 'com Obesidade'
        } else {
            imcResult = 'com Obesidade Mórbida'
        }
    }
}

const createMessage = () => {
    calculateImc(weight, height)
    const name = document.querySelector('input#name')
    if(name.value == '' || imc == 0){
        message = 'Preencha todos os Campos!'
    } else {
        message = `${name.value}, seu IMC é ${imc.toFixed(1)} e você está ${imcResult}.`
    }
    result.textContent = message
}
button.addEventListener('click', createMessage)