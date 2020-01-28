'use strict'

// Bucle FOR

/*

  Bucle es una estructura de control que se repetita varias veces.

*/

// Ejemplo 1: Impresión de número del 1 al 100.

var numero = 100;

/*

  El primer elemento es la variable que va actualizandose en cada vuelta
  El segundo elemento es una condici en qué caso si seguirá haciendo interración con el Bucle
  El tercer elemento es el incremento del primeri elemento

  Un operador de incremente es "++" esto lo que hará será incremente el primer elemnto

*/

for (var i = 0; i < numero; i++) {
  console.log('Vamos por el número: '+i);

  debugger;
};


// WHILE

/*

	El bucle while es un bucle que consta de una condición el cuál hará que este se repita incondicionalmente
	dependiendo solo y únicamente de que no se cumpla esta condición, si se cumple esta condición esta hará
	que el bucle se rompa.

	Se evalua una condición y se ejecuta un bloque de código, si no cumple la condición no entra a ejecutar
	el bloque de código.

*/

var year = 2018;

//	Se usa la palabra "While" para ejecutar un bucle while.
while(year!=1999){
//	Se usa el break para romper el bucle y siga con la siguiente ejecución del código.
	break;
	console.log("Esta en el año: "+year);

//	De esta manera la variable incrementa:	year++;
//	De esta manera la variable decrementa: year--;

	year--;
}


// DO WHILE

/*

	El bucle Do while, se ejecuta un bloque de código y después se evalúa una condición para saber si se vuelve a ejecutar este
	bloque de código o si no se debe seguir ejecutando.

*/

var years = 15;
var numero_ejecucion = 0;
/*
	IMPORTANTE:
		Primero se ejecuta el do después se ejecuta el while.
*/
do{
	alert('SOLO CUANDO ES DIFERENTE A 20');
	years++;
	numero_ejecucion++;
}while(years!=20)

console.log(numero_ejecucion);

/*

	NOTA : EL BREAK; ROMPE UN CICLO Y/O CONDICIÓN.

*/
