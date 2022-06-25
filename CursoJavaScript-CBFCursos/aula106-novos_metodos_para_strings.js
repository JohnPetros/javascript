let curso = 'Curso de JavaScript Moderno'
let p = 'Curso'


//startsWith retorna true se o valor indicado corresponder exatamente a sequência INICIAL de caracteres da string em análise. Caso contrário, retorna false
console.log(curso.startsWith('Curso'))
console.log(curso.startsWith(p) ? 'Verdadeiro\n' : 'Falso\n') 

//endWith retorna true se o valor indicado corresponder exatamente a sequência FINAL de caracteres da string em análise. Caso contrário, retorna false
console.log(curso.endsWith('Curso'))
console.log(curso.endsWith(p) ? 'Verdadeiro\n' : 'Falso\n') 

//includes retorna true se o valor indicado corresponder a sequência INCLUSA de caracteres da string em análise. Caso contrário, retorna false
console.log(curso.includes('Curso de HTML'))
console.log(curso.includes(p) ? 'Verdadeiro\n' : 'Falso\n') 

//repeat determina quantas vezes a string irá se repetir
console.log(curso.repeat(2))
let repeticão = curso.repeat(10)
console.log(repeticão) 
