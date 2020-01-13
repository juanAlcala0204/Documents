'use strict'

// ALERTA

/*
	alert(), es una función para hacer salir una ventana emergente.
*/

// ALERTA (VENTANA EMERGENTE)
alert("ESTA ES MI ALERTA!!");

// ALERTA DE CONFIRMACIÓN (VENTANA DE CONFIRMACIÓN)

confirm("¿Esta seguro de seguir con la siguiente operación?");

/* 
	
	Si se quiere saber cual es el valor de la función confirm, se debe poner esta dentro de una varible.

*/

var valor_confirm = confirm("¿Esta seguro de seguir con la siguiente operación?, saber valor confirm");

console.log(valor_confirm);

// ALERTA INGRESO DE DATOS

/*

	Recibe dos parametros, en este caso "Que edad tienes" y el segundo que es el valor por defecto que aparece.
	
	NOTA:
		-Las variables de prompt siempre serán String.
		-Si se quiere capturar el dato de la función prompt, se debe meter esta en una variable.
*/

var valor_prompt = prompt("¿Que edad tienes?", 0);

console.log("El valor de la función valor_prompt es de: " + valor_prompt);