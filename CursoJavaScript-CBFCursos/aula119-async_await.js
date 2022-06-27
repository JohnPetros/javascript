// As palavras-chave ASYNC e AWAIT são uma sintaxe que simplifica a programação assíncrona, facilitando o fluxo de escrita e leitura do código; assim é possível escrever código que funciona de forma assíncrona, porém é lido e estruturado de forma síncrona. 

function contar(num){
    let cont = 0
    for(let i=0;i<num;i++){
        console.log(cont)
        cont++
    }
    //return cont
    console.log(cont)
}

function contarT(num){
    let cont = 0
    let t = setTimeout(() => {
        for(let i=0;i<num;i++){
            console.log(cont)
            cont++
        } 
    }, 2000);
    //return cont
    console.log(cont)
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
    //return p
    console.log(cont)
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

// contarPT(10)
//     .then(sucesso => console.log('Sucesso: ' + sucesso))
//     .catch(erro => console.log('Sucesso: ' + erro))


async function contarPTA(n){
    const r = await contarPT(n)
    console.log(r)
}

contarPT(10)

async function contarPA(n){
    const r = await contarP(n)
    console.log(r)
}

contarPA(10)