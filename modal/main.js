const botaoEl = document.querySelector('button')
botaoEl.addEventListener('click', abreModal)

function abreModal(){
    const modalEl = document.querySelector('.modal')
    modalEl.classList.add('visivel')
}

const botoesDeFechar = document.querySelectorAll('.fechar-modal')
botoesDeFechar.forEach(fecharEl => fecharEl.addEventListener('click', fechaModal))

function fechaModal(){
    const modalEl = document.querySelector('.modal')
    modalEl.classList.remove('visivel')
}