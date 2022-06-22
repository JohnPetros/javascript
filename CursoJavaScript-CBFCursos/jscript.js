var dirYJog, dirXJog, jog, velJog, pXJog, pYJog
var tamTelaW, tamTelaH
var jogo
var frame

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

function controleJogador(){
    pYJog
}

function gameLoop(){
    if(jogo){
        //Funções de controle
    }
    frame = requestAnimationFrame(gameLoop)
}

function iniciar(){
    jogo = false

    //inicialização das variáveis da Tela
    tamTelaH = window.innerHeight
    tamTelaW = window.innerWidth

    //inicialização das variáveis do Jogador
    dirXJog = dirYJog = 0
    pXJog = tamTelaW / 2
    pYJog = tamTelaH / 2
    jog = document.getElementById('naveJog')
    jog.style.top = pYJog + 'px' 
    jog.style.left = pXJog + 'px' 
}

window.addEventListener('load', iniciar)
document.addEventListener('keydown', teclaDw)
document.addEventListener('keyup', teclaUp)