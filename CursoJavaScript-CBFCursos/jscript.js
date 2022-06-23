var dirYJog, dirXJog, jog, velJog, pXJog, pYJog
var velTiro
var tamTelaW, tamTelaH
var jogo
var frame
var bombas, contBombas, painelContBombas, velBomba, tmpCriarBomba
var vidaPlaneta, barraPlaneta
var indiceExplosao, indiceSom
var telaMsg

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
                criarExplosao(2, bombas[i].offsetLeft, null)
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
            colisaoTiroBomba(tiros[i])
            if(postiro < 0){
                //tiros[i].remove()
                document.body.removeChild(tiros[i])
            }
        }
    }
}

function criarExplosao(tipo, x, y){//Tipo de explosão: 1 = Ar, 2 = Chão
    if(document.getElementById('explosao' + (indiceExplosao-4))){
        document.getElementById('explosao' + (indiceExplosao-4)).remove()
    }
    var explosao = document.createElement('div')
    var img = document.createElement('img')
    var som = document.createElement('audio')
    //Atributos para div
    var atrib1 = document.createAttribute('class')
    var atrib2 = document.createAttribute('style')
    var atrib3 = document.createAttribute('id')
    //Atributo para imagem
    var atrib4 = document.createAttribute('src')
    //Atributos para áudio
    var atrib5 = document.createAttribute('src')
    var atrib6 = document.createAttribute('id')

    atrib3.value = 'explosao' + indiceExplosao
    if(tipo == 1){
        atrib1.value = 'explosaoAr'
        atrib2.value = 'top:' + y + 'px; left:' + x + 'px'
        atrib4.value = 'jogo_de_nave/explosao_ar.gif?' + new Date()
    } else{
        atrib1.value = 'explosaoChao'
        atrib2.value = 'top:' + (tamTelaH-57) + 'px; left:' + (x-17) + 'px'
        atrib4.value = 'jogo_de_nave/explosao_chao.gif?' + new Date()
    }
    atrib5.value = 'jogo_de_nave/exp1.mp3?' + new Date()
    atrib6.value = 'som' + indiceSom
    explosao.setAttributeNode(atrib1)
    explosao.setAttributeNode(atrib2)
    explosao.setAttributeNode(atrib3)
    img.setAttributeNode(atrib4)
    som.setAttributeNode(atrib5)
    som.setAttributeNode(atrib6)
    explosao.appendChild(img)
    explosao.appendChild(som)
    document.body.appendChild(explosao)
    document.getElementById('som' + indiceSom).play()
    indiceExplosao++ 
    indiceSom++ 
}


function colisaoTiroBomba(tiro){
    var qtdBombas = bombas.length 
    for(var i=0; i<qtdBombas; i++){
        if(bombas[i]){
           if(
                (
                    (tiro.offsetTop <= (bombas[i].offsetTop+40))&& //Colisão da parte de cima do tiro com a parte de baixo da bomba
                    ((tiro.offsetTop+6) >= (bombas[i].offsetTop)) //Colisão da parte de baixo do tiro com a parte de cima da bomba
                )
                &&
                (
                    (tiro.offsetLeft <= (bombas[i].offsetLeft+24))&& //Colisão da parte esquerda do tiro com a parte direita da bomba
                    ((tiro.offsetLeft+6) >= (bombas[i].offsetLeft)) //Colisão da parte direita do tiro com a parte esquerda da bomba
                )
           )
           {
                criarExplosao(1, bombas[i].offsetLeft-25, bombas[i].offsetTop)
                bombas[i].remove()
                tiro.remove()
           } 
        }
    }
}

function gerenciarGame(){
    barraPlaneta.style.width = vidaPlaneta + 'px'
    if(contBombas <= 0){
        jogo = false
        clearInterval(tmpCriarBomba)
        telaMsg.style.backgroundImage = 'url(jogo_de_nave/vitoria.jpg)'
        telaMsg.style.display = 'block'
    }
    if(vidaPlaneta<=0){
        jogo = false
        clearInterval(tmpCriarBomba)
        telaMsg.style.backgroundImage = 'url(jogo_de_nave/derrota.jpg)'
        telaMsg.style.display = 'block'
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
    gerenciarGame()
    frame = requestAnimationFrame(gameLoop)
}

function reiniciar(){
    bombas = document.getElementsByClassName('bomba')
    var qtdBombas = bombas.length
    for(var i=0;i<qtdBombas;i++){
        if(bombas[i]){
            bombas[i].remove()
        }
    }
    telaMsg.style.display = 'none'
    clearInterval(tmpCriarBomba)
    cancelAnimationFrame(frame)
    vidaPlaneta = 300
    pXJog = tamTelaW/2
    pYJog = tamTelaH/2
    jog.style.top = pYJog + 'px'
    jog.style.left = pXJog + 'px'
    jog.style.left = pXJog + 'px'
    contBombas = 150
    jogo = true
    tmpCriarBomba = setInterval(criarBomba, 1700)

    gameLoop()
}

function iniciar(){
    jogo = false

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
    contBombas = 3
    velBomba = 3
    tmpCriarBomba = setInterval(criarBomba, 1700)

    //Controle do Planeta
    vidaPlaneta = 300
    barraPlaneta = document.getElementById('barraPlaneta')
    barraPlaneta.style.width = vidaPlaneta + 'px'

    //Controle das Explosões
    indiceExplosao = indiceSom = 0

    //Controle de Telas
    telaMsg = document.getElementById('telaMsg')
    telaMsg.style.backgroundImage = "url('jogo_de_nave/intro.jpg')"
    telaMsg.style.display = 'block'
    document.getElementById('btnJogar').addEventListener('click', reiniciar)

}

window.addEventListener('load', iniciar)
document.addEventListener('keydown', teclaDw)
document.addEventListener('keyup', teclaUp)