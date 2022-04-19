function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var date = new Date()
    // var hora = date.getHours()
    var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'aula12/manha.png'
        document.body.style.background = '#8A6F44'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'aula12/tarde.png'
        document.body.style.background = '#fe9f02'
    } else {
        // BOA NOITE!
        img.src = 'aula12/noite.png'
        document.body.style.background = '#784459'
    }
}
