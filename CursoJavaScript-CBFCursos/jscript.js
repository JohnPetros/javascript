var dirYJog, dirXJog

function teclaDw(){
    var tecla = event.keyCode
    if(tecla==37){//Esquerda
        dirXJog = -1
    } else if(tecla==38){//Cima
        dirYJog = -1
    } else if(tecla==39){//Direita
        dirXJog = 1
    } else if(tecla==40){//Baixo
        dirYJog = 1
    } else if(tecla==32){//Espaço / Tiro
        // Tiro
    }
}
function teclaUp(){
    var tecla = event.keyCode
    if((tecla==37)||(tecla==39)){//Esquerda e Direita
        dirXJog = 0
    } else if((tecla==38)||(tecla=40)){//Cima e Baixo
        dirYJog = 0
    }
}

function gameLoop(){

}

function iniciar(){

}

window.addEventListener('load', iniciar)
document.addEventListener('keydown', teclaDw)
document.addEventListener('keyup', teclaUp)