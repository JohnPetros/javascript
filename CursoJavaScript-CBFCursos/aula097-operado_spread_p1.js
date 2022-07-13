 // Operador Spread divide os elementos de uma iteração (vetor, matriz etc), transformando-os em elementos separados.

 const notas = [100, 60, 45, 78, 80, 32, 56]
 console.log(notas)
 console.log(...notas)
 // console.log(notas[2])

 const numeros = [100,200,300]

 function soma(n1,n2,n3){
     return n1 + n2 + n3
 }
 //console.log(soma(numeros[0], numeros[1], numeros[2]))
 console.log(soma(...numeros))
 
 const jogador = [
     nome = 'João',
     pontos = 1000,
     vidas = 7
 ]

 console.log(jogador)
 console.log(...jogador)