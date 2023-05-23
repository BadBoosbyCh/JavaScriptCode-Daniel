console.log("Hello World");
//alert("Bonjour le monde")
/*
Comentario Multilinea


let nombre= prompt("¿Cual es tu nombre?");
cosnole.log(nombre);

console.log(typeof(nombre));
*/
 
let numeroUno = prompt("Ingresa un numero");

let numeroDos = prompt("Ingresa el otro numero");


let resultadoSuma = parseInt(numeroUno) + parseInt(numeroDos);
let resultadoResta = parseInt(numeroUno) - parseInt(numeroDos);
let resultadoDivision = parseInt(numeroUno) / parseInt(numeroDos);
let resultadoMultiplicacion = parseInt(numeroUno) * parseInt(numeroDos);

console.log(`El resultado de la suma es: ${resultadoSuma}`);
console.log(`El resultado de la resta es: ${resultadoResta}`);
console.log(`El resultado de la division es: ${resultadoDivision}`);
console.log(`El resultado de la multiplicacion es: ${resultadoMultiplicacion}`);