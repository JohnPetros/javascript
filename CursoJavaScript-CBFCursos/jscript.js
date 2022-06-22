var dirYJog, dirXJog, jog, velJog, pXJog, pYJog
var velTiro
var tamTelaW, tamTelaH
var jogo
var frame
var bombas, contBombas, painelContBombas, velBomba, tmpCriarBomba
var vidaPlaneta

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
        atirar(pXJog+17, pYJog)
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

function criarBomba(){
    if(jogo){
        var y = 0
        var x = Math.random() * tamTelaW
        var bomba = document.createElement('div')
        var atrib1 = document.createAttribute('class')
        var atrib2 = document.createAttribute('style')
        atrib1.value = 'bomba'
        atrib2.value = 'top:' + y + 'px; left:' + x + 'px'
        bomba.setAttributeNode(atrib1)
        bomba.setAttributeNode(atrib2)
        document.body.appendChild(bomba)
        contBombas--
    }
}

function controleBomba(){
    bombas = document.getElementsByClassName('bomba')
    var qtdBombas = bombas.length
    for(var i=0; i<qtdBombas; i++){
        if(bombas[i]){
            var pBomba = bombas[i].offsetTop
            pBomba += velBomba
            bombas[i].style.top = pBomba + 'px'
            if(pBomba > tamTelaH){
                vidaPlaneta -= 10
                bombas[i].remove()
            }
        }
    }
}

function atirar(x, y){
    var tiro = document.createElement('div')
    var atrib1 = document.createAttribute('class')
    var atrib2 = document.createAttribute('style')
    atrib1.value = 'tiroJog'
    atrib2.value = 'top: ' + y + 'px; left: ' + x + 'px'
    tiro.setAttributeNode(atrib1)
    tiro.setAttributeNode(atrib2)
    document.body.appendChild(tiro)
}

function controleTiros(){
    var tiros = document.getElementsByClassName('tiroJog')
    var tam = tiros.length
    for(var i=0; i<tam; i++){
        if(tiros[i]){
            var postiro = tiros[i].offsetTop
            postiro -= velTiro
            tiros[i].style.top = postiro + 'px'
            if(postiro < 0){
                //tiros[i].remove()
                document.body.removeChild(tiros[i])
            }
        }
    }
}

function controleJogador(){
    pYJog += dirYJog * velJog
    pXJog += dirXJog * velJog
    jog.style.top = pYJog + 'px' 
    jog.style.left = pXJog + 'px' 
}

function gameLoop(){
    if(jogo){
        //Funções de controle
        controleJogador()
        controleTiros()
        controleBomba()
    }
    frame = requestAnimationFrame(gameLoop)
}

function iniciar(){
    jogo = true

    //Inicialização das variáveis da Tela
    tamTelaH = window.innerHeight
    tamTelaW = window.innerWidth

    //Inicialização das variáveis do Jogador
    dirXJog = dirYJog = 0
    pXJog = tamTelaW / 2
    pYJog = tamTelaH / 2
    velJog = velTiro = 5
    jog = document.getElementById('naveJog')
    jog.style.top = pYJog + 'px' 
    jog.style.left = pXJog + 'px' 

    //Controle das Bombas
    clearInterval(tmpCriarBomba)
    contBombas = 150
    velBomba = 3
    tmpCriarBomba = setInterval(criarBomba, 1700)

    //Controle do Planeta
    vidaPlaneta = 300

    gameLoop()
}

window.addEventListener('load', iniciar)
document.addEventListener('keydown', teclaDw)
document.addEventListener('keyup', teclaUp)