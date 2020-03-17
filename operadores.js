// Para uma lista completa dos operadores do JavaScript visite W3schools JavaScript Operators e MDN Expressions and Operators.
//aritméticos
// soma
var p1 = 15.6;
var p2 = 21.6;
var total = p1 + p2

// sub
var p3 = 15.6;
var p4 = 21.6;
var total = p4 - p3

// div
var p5 = 15.6;
var p6 = 21.6;
var total = p6 / p5

// mult
var p7 = 15.6;
var p8 = 21.6;
var total = p7 - p8

// resto
var resto = 15 % 4

// incremento
var v = 10;

v++;//v-- //retorna valor da var e depois incrementa
++v;//--v //incrementa e depois retorna valor da var


//comparação
var idade = 15
// == e === testa se um valor é igual ao outro
idade == 18
idade === 18
// != e !== testa se dois valores são diferentes
idade != 18
idade !== 18
// > e < testa se o primeiro é maior (menor) que o segundo
idade != 18
idade !== 18

// devido a coerção de tipo, caso ocorra operação entre tipos diferentes, 
// a expressão é convertida para um tipo que pode ser avaliado
var soma = "5" + 5; // resulta em 55

5 == "5" //true
5 === "5" //false

// Operações lógicas
//AND
true && true //true
true && false //false
false && true //false
false && false //false

//OR
true || true //true
true || false //true
false || true //true
false || false //false

//NOT
!true //false
!false //true

//teste
var num = 21;

var a = (num % 3 === 0) //true
var b = (num % 5 === 0) //false 

var ab = a && b; //false
