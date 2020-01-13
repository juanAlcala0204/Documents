'use strict'

/*

 Operadores
 Los operadores son los mismo que los operadores matemáticos

*/
//Cuando creas variables no puede usar signos raros o caracteres especiales
var numero1 = 1;
var numero2 = 2;
var suma = 0;
var resta = 0;
var multiplicacion = 0;
var division = 0;
var porcentaje = 0;

//Operaciones utilizando los números.
suma= numero1 + numero2;
resta= numero1 - numero2;
multiplicacion= numero1 * numero2;
division= numero1 / numero2;
// El porcentaje es el resto de la division entre los dos numeros (Es lo que queda el residuo).
porcentaje= numero1 % numero2;

// Imprimir los resultados de las operaciones.
alert("El resultado de la operacion es de : " + suma
      + "," + "El resultado de la resta es de: " + resta
      + "," + "El resultado de la multiplicacion es de: " + multiplicacion
      + "," + "El resultado de la division es de: " + division
      + "," + "El resultado del porcentaje es de: " + porcentaje);

//Tipos de Datos.

//Numero Entero.
var numero_entero = 44;

//Cadena de Texto (String).
var cadena_texto = "Prueba Cadena de Texto";

//Boolean (Verdadero o Falso).
var verdadero_falso= false;

// Imprimir los Tipos de Datos.
console.log("Numero Entero: " + numero_entero);
console.log("Cadena de Texto: " + cadena_texto);

/*
 Importante, siempre que debes preguntar en un if una "igualdad" debes
 hacerlo == porque si lo haces con un = estas asignandole un valor.
*/
if(verdadero_falso==true){
  console.log("verdadero_falso en este caso es: " + verdadero_falso);
}else {
  console.log("verdadero_falso en este caso es: " + verdadero_falso);
}

//IMPORTANTE: Si quieres saber que tipo de dato es se utiliza el typeof

console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_falso);
