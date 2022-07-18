// const trafficLamp = document.querySelector('#trafficLight')
// const buttonRed = document.querySelector('#red')
// const buttonYelllow = document.querySelector('#yellow')
// const buttonGreen = document.querySelector('#green')
// const buttonAutomatic = document.querySelector('#automatic')
// let automaticInterval = null

// function turnRed(){
//     trafficLamp.src = "imgs/vermelho.png"
//     if(automaticInterval != null){
//         clearInterval(automaticInterval)
//     }
//     automaticInterval = null
// }

// function turnYelllow(){
//     trafficLamp.src = "imgs/amarelo.png"
//     if(automaticInterval != null){
//         clearInterval(automaticInterval)
//     }
//     automaticInterval = null
// }

// function turnGreen(){
//     trafficLamp.src = "imgs/verde.png"
//     if(automaticInterval != null){
//         clearInterval(automaticInterval)
//     }
//     automaticInterval = null
// }

// function turnLight(){
//     if(trafficLamp.src.includes('vermelho')){
//         trafficLamp.src = "imgs/amarelo.png"
//     } else if(trafficLamp.src.includes('amarelo')){
//         trafficLamp.src = "imgs/verde.png"
//     } else {
//         trafficLamp.src = "imgs/vermelho.png"
//     }
// }

// function turnAutomatic(){
//     if (automaticInterval == null) 
//         automaticInterval = setInterval(turnLight, 500)
// }

// buttonRed.addEventListener('click', turnRed)
// buttonYelllow.addEventListener('click', turnYelllow)
// buttonGreen.addEventListener('click', turnGreen)
// buttonAutomatic.addEventListener('click', turnAutomatic)

const img = document.getElementById('trafficLight')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalId = null

const trafficLight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]()
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}

const stopAutomatic = () => {
    clearInterval(intervalId)
}

const turnOn = {
    'red': () => img.src = '/imgs/vermelho.png',
    'yellow': () => img.src = '/imgs/amarelo.png',
    'green': () => img.src = '/imgs/verde.png',
    'automatic': () => setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight)