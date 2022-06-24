var div1


window.addEventListener('load', iniciar)

function iniciar(){
    div1 = document.getElementById('div1')
    div2 = document.getElementById('div2')
    div3 = document.getElementById('div3')
    div4 = document.getElementById('div4')

    div1.addEventListener('mouseover', trocarCarro)
    div1.addEventListener('mouseout', voltarCarro)

    div2.addEventListener('mouseover', trocarCarro)
    div2.addEventListener('mouseout', voltarCarro)

    div3.addEventListener('mouseover', trocarCarro)
    div3.addEventListener('mouseout', voltarCarro)

    div4.addEventListener('mouseover', trocarCarro)
    div4.addEventListener('mouseout', voltarCarro)
}

function trocarCarro(){
    var carro = event.target
    carro.style.backgroundImage = "url('imgs/c2.png')"
}

function voltarCarro(){
    var carro = event.target
    carro.style.backgroundImage = "url('imgs/c1.png')"
}