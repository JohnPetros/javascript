// Em JavaScript é possível a alteração de um tipo de dado para outro tipo de dado

/*  

Essa alteração pode ser de dois tipos:

Type Convertion / Typecasting (Converção de tipo): significa alteração explícita ou implícita de dados de um tipo de dados para outro. A conversão implícita acontece quando o compilador atribui automaticamente tipos de dados, mas o código-fonte também pode exigir explicitamente que uma conversão ocorra. Por exemplo, dada a instrução 5+2.0, o ponto flutuante 2.0 é implicitamente tipificado em um inteiro, mas dado a instrução Number("0x11"), a string "0x11" é explicitamente tipificada como o número 17.

Type Coersion (Coerção de de tipo): é a alteração automática ou implícita de valores de um tipo de dados para outro (como strings para números). A conversão de tipo é semelhante à coerção de tipo porque ambas convertem valores de um tipo de dados para outro com uma diferença importante — a coerção de tipo é implícita, enquanto a conversão de tipo pode ser implícita ou explícita.
*/

console.log('9' + 5)
console.log(Number('9') + 5)