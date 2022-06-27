// Promisse é um objeto usado para realizar processamentos assíncronos, esse objeto guarda um valor que pode estar disponível agora, no futuro ou nunca. Isso permite o tratamento de eventos ou ações que acontecem de forma assíncrona em casos de sucessos ou falhas

function contar(num){
    let cont = 0
    for(let i=0;i<num;i++){
        console.log(cont)
        cont++
    }
    return cont
}

function contarT(num){
    let cont = 0
    let t = setTimeout(() => {
        for(let i=0;i<num;i++){
            console.log(cont)
            cont++
        } 
    }, 2000);
    return cont
}

function contarP(num){
    let cont = 0
    let p = new Promise((resolve, reject) => {
        for(let i=0;i<num;i++){
            console.log(cont)
            cont++
        }
        if(cont == num){
            resolve(cont)
        } else {
            reject('ERRO')
        }
    })
    return p
}

function somarPositivos(n1, n2){
    let p = new Promise((resolve, reject) => {
        if(n1 >= 0 && n2 >= 0){
            resolve(n1 + n2)
        } else {
            reject('ERRO')
        }
    })
    return p
}

// console.log(contar(10))
// console.log(contarT(10))
// console.log(contarP(10))
// contarP(10)
//     .then(sucesso => console.log('Sucesso: ' + sucesso))
//     .catch(erro => console.log('Sucesso: ' + erro))

somarPositivos(10 , 2)
    .then(sucesso => console.log('Sucesso: ' + sucesso))
    .catch(erro => console.log('Erro: ' + erro))

function contarPT(num){
    let cont = 0
    let p = new Promise((resolve, reject) => {
        let t = setTimeout(() => {
            for(let i=0;i<num;i++){
                console.log(cont)
                cont++
            }
            if(cont == num){
                resolve(cont)
            } else {
                reject('ERRO')
            }
        }, 2000);
    })
    return p
}

contarPT(10)
    .then(sucesso => console.log('Sucesso: ' + sucesso))
    .catch(erro => console.log('Sucesso: ' + erro))