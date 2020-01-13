'use strict'

/* 

	Realizar un programa que pida dos numeros y este determine cuál es menor y cuál es mayor o si son iguales.
	
	Solución Técnica:

		-Se pedirá al usuario los datos a través de la función prompt() y este se colocará en dos variables que se nombrarán
		 numero_uno y numero_dos, cuando el usuario finalice el ingreso de datos se usará la función confirm() para realizar
		 una confirmación de seguir o no con la operación, si se da "Cancelar" este lanzará un alert() con el mensaje de
		 cancelación de procedimiento, si por el contrario procede aceptar la continuación de la operación este ejercerá la utilización 
		 de estas dos variables con las qué se realizará una comparación para saber si es mayor, menor o igual a través del
		 uso de la condicionales anidadas. Una vez se tenga el resultado este será llevado a una variable llamada resultado_operacion y esta 
		 será impresa a través de la función alert();
	
	PLUS:

		-Si la información digitada por el cliente no es un número, el programa lanzará un alerta indicandole que lo ingresado no es
		 necesita ser un número, si sucede este caso se volverá a pedir la información.

		-Si alguno de los números ingresados es menor a cero, este lanzará una alerta indicando que los números digitados deben
		 ser mayores o iguales a cero, si sucede este caso se volverá a pedir la información.
*/

// VARIABLES

var ctrl_error;

var resultado_operacion;

var operacion_cancelada = "LA OPERACIÓN SE CANCELO ÉXITOSAMENTE.";

// FIN VARIABLES

// INICIO VALIDACIÓN

do{

	var numero_uno = parseInt(prompt("Digite el número uno: ", 0));
	console.log(numero_uno);
	var numero_dos = parseInt(prompt("Digite el número dos: ", 0));

	var alt_confirmacion = confirm("¿Está seguro de continuar con la operación?");

	if(numero_uno < 0 || numero_dos < 0){
			ctrl_error = confirm("DEBES INGRESAR NÚMEROS ÚNICAMENTE MAYORES O IGUALES A 0");
	} else{

		switch(true){

		case alt_confirmacion ==false:
			alert(operacion_cancelada);
		break;

		case numero_uno > numero_dos:
			resultado_operacion = "EL NÚMERO UNO ES EL NÚMERO MAYOR Y EL NÚMERO DOS ES EL MENOR.";
			ctrl_error = null;
			alert(resultado_operacion);
		break;

		case numero_uno < numero_dos:
			resultado_operacion = "EL NÚMERO DOS ES EL NÚMERO MAYOR Y EL NÚMERO UNO ES EL MENOR.";
			ctrl_error = null;
			alert(resultado_operacion);
		break;

		case numero_uno == numero_dos:
			resultado_operacion = "EL NÚMERO UNO Y EL NÚMERO DOS SON IGUALES.";
			ctrl_error = null;
			alert(resultado_operacion);
		break;

		default:
			/*
				NOTA IMPORTANTE:
					- La funcion isNaN() se usa para comprobar si la información digitada es un número, esta intenta convertir
					  la variable a un número, si no puede convertirla entonces lanzará un true (Significa que es un String)
					  si puede convertirla lanzará un false (Significa que es un número).
			*/
			
			if(isNaN(numero_uno) || isNaN(numero_dos)){
				ctrl_error = confirm("SE INGRESO UNA LETRA, DEBE SOLO INGRESARSE NÚMEROS, ¿DESEA VOLVER A INGRESA LA INFORMACIÓN? ");
			}else{
				ctrl_error = confirm("CASO NO CONTEMPLADO CON LA INFORMACIÓN DADA, ¿DESEA VOLVER A INGRESA LA INFORMACIÓN?");
			}
		}
	}

}while(ctrl_error)

// INICIO CONTROL DE ERRORES

if(ctrl_error==false){
	alert(operacion_cancelada);	
}

// FIN CONTROL DE ERRORES

// FIN VALIDACIONES
