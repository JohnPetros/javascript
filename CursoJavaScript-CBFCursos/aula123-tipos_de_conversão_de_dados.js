// Em JavaScript é possível a alteração de um tipo de dado para outro tipo de dado

/*  

Essa alteração pode ser de dois tipos:

Type Convertion / Typecasting (Converção de tipo): significa alteração explícita ou implícita de dados de um tipo de dados para outro. A conversão implícita acontece quando o compilador atribui automaticamente tipos de dados, mas o código-fonte também pode exigir explicitamente que uma conversão ocorra. Por exemplo, dada a instrução 5+2.0, o ponto flutuante 2.0 é implicitamente tipificado em um inteiro, mas dado a instrução Number("0x11"), a string "0x11" é explicitamente tipificada como o número 17.

Type Coersion (Coerção de de tipo): é a alteração automática ou implícita de valores de um tipo de dados para outro (como strings para números). A conversão de tipo é semelhante à coerção de tipo porque ambas convertem valores de um tipo de dados para outro com uma diferença importante — a coerção de tipo é implícita, enquanto a conversão de tipo pode ser implícita ou explícita.
*/

console.log('9' + 5)
console.log(Number('9') + 5)


console.log()
/*
        Conversão de tipo JavaScript:

            As variáveis ​​JavaScript podem ser convertidas em uma nova variável e outro tipo de dados:
                .Pelo uso de uma função JavaScript
                .Automaticamente pelo próprio JavaScript

            Convertendo Strings em Números:
                O método global Number() pode converter strings em números.

                Strings contendo números (como "3.14") são convertidas em números (como 3.14).
                Strings vazias são convertidas em 0.
                Qualquer outra coisa se converte em NaN(Not a Number / Não é um número).
*/

console.log(Number("3.14"))    // returns 3.14
console.log(Number(" "))       // returns 0
console.log(Number(""))        // returns 0
console.log(Number("99 88"))   // returns NaN

// Existem 3 métodos JavaScript que podem ser usados ​​para converter variáveis ​​em números:
Number(' 2020') // Retorna um número, convertido de seu argumento
parseFloat('2020.5  ') // Analisa uma string e retorna um número de ponto flutuante
parseInt('  2020  ') // analisa uma string e retorna um número inteiro
// Nos Três Métodos os espaços são permitidos, mas apenas o primeiro número é retornado




console.log()
/*
           Convertendo números em strings
                O método global String()pode converter números em strings.

                Pode ser usado em qualquer tipo de números, literais, variáveis ​​ou expressões:
*/

String(x)         
String(123)       
String(100 + 23)  

// O método Number toString() faz o mesmo.

let x
x.toString()
(123).toString()
(100 + 23).toString()

// Mais métodos

toExponential() // Retorna uma string, com um número arredondado e escrito usando notação exponencial.
// Um parâmetro define o número de caracteres atrás do ponto decimal:
let number1 = 9.656;
number1.toExponential(2);
number1.toExponential(4);
number1.toExponential(6);

toFixed() // Retorna uma string, com um número arredondado e escrito com um número especificado de decimais.
let number2 = 9.656;
number2.toFixed(0);
number2.toFixed(2);
number2.toFixed(4);
number2.toFixed(6);


toPrecision() // Retorna uma string, com um número escrito com um comprimento especificado
let number3 = 9.656;
number3.toPrecision();
number3.toPrecision(2);
number3.toPrecision(4);
number3.toPrecision(6);