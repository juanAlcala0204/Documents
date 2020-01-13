'use strict'

/*

  Condicional
  Un condicional son estructuras de control que nos van a permitir comparar algo.
  Estas condiciones se pueden hacer con if significa "Sí"

*/

// Condicional If

/*

  Los operadores existentes en las estructural de control son:
   Mayor o Igual >=
   Menor o Igual <=
   Menor <
   Mayor >
   Igual ==
   Diferente !=
   O ||

*/

/* 
  IMPORTANTE IF TERNARIO: Se debería usar para signarle un valor con solo dos posibles respuestas
*/
var variableAsignarRespuesta = (condicional) ? true : false;

var edad_1= 30;
var edad_2= 12;

// EJMPLO NUMERO 1:

//Si pasa esto
if(edad_1 > edad_2){
  //Ejecuta esto
  console.log("Edad uno es mayor que edad 2");
}else {
  console.log("Edad 2 es menor que edad 1");
}

// EJEMPLO NUMERO 2:

var edad = 18;
var nombre = "Juan David";

if(edad == 18){
  console.log(nombre + " Es mayor de Edad.");
}

/*
  CONDICIONALES ANIDADOS
  -Los condicionales anidados son una serie de secuencia de condiciones
   se realiza de la siguiente manera:
*/

// EJEMPLO 1

var numeroUno = 10;
var numeroDos = 18;

if (numeroUno == numeroDos) {
  console.log("El número uno es igual al número dos.");
}else if (numeroUno < numeroDos) {
  console.log("El número uno es menor al número dos.");
}else if (numeroUno > numeroDos) {
  console.log("El número uno es mayor al número dos.");
}

/*

  OPERADORES LÓGICOS
  -Los operadores lógicos se utilizan para ayudar a completar una condición, entre
   estos estan:

   -AND (&&) : Significa "Y"
   -OR (||): Significa "O"
   -Negación (!=) : Se utiliza para negar

*/

// EJEMPLO CON AND (&&)

var año = 2019;
var mes = 'julio';

if(año == 2019 && mes == 'julio'){
  console.log('Estas en el año: '+año+' y el mes: '+mes);
}

//  EJEMPLO CON OR (||)

var primerDia = 10;
var segundoDia = 5;

if (primerDia == 9 || segundoDia== 5) {
  console.log("El dia es: "+segundoDia+" por lo tanto si entro a la condición.");
}
//también puedes darle prioridad a una condición por ejemplo:

var hora = 3;

if (primerDia = 7 || (segundoDia == 5 && hora == 2)) {
    console.log("El primer día: "+primerDia+" y la hora: "+hora);
}
