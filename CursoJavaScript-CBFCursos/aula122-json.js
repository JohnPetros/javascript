// JSON (Javascript Object Notation) é um arquivo de texto usado para transmitir dados de um sistema para outro.

let colabJSON = '{"colaboradores":[' +
'{"nome": "Bruno", "salario": 10000, "idade": 40},' +
'{"nome": "Claudia", "salario": 13500, "idade": 32},' +
'{"nome": "Daniel", "salario": 8200, "idade": 25},' +
'{"nome": "Eduarda", "salario": 5000, "idade": 38},' +
'{"nome": "Fernando", "salario": 3200, "idade": 21}' +
']}'

let colabOBJ = [
    {"nome": "Bruno", "salario": 10000, "idade": 40}, 
    {"nome": "Claudia", "salario": 13500, "idade": 32},
    {"nome": "Daniel", "salario": 8200, "idade": 25},
    {"nome": "Eduarda", "salario": 5000, "idade": 38},
    {"nome": "Fernando", "salario": 3200, "idade": 21}
]

let c_obj = JSON.parse(colabJSON) // A função JSON.parse() serve para converter strings JSON em objetos JavaScript
let c_json = JSON.stringify(colabOBJ) // A função JSON.parse() serve para converter um objeto JavaScript em uma string JSON

console.log(c_obj.colaboradores[0].nome)
console.log(c_json)