const lamp = document.querySelector('#lamp')
const buttonOn = document.querySelector('#on')
const buttonOff = document.querySelector('#off')

function isLampBroken(){
    return lamp.src.includes("quebrada")
}

function turnOn() {
    if(!isLampBroken())
     lamp.src = "imgs/ligada.jpg"
}

function turnOff() {
    if(!isLampBroken())
    lamp.src = "imgs/desligada.jpg"
}

function breake() {
    if(!isLampBroken())
    lamp.src = "imgs/quebrada.jpg"
}

lamp.addEventListener('mouseover', turnOn)
lamp.addEventListener('mouseout', turnOff)
lamp.addEventListener('dblclick', breake)

buttonOn.addEventListener('click', turnOn)
buttonOff.addEventListener('click', turnOff)
