'use strict'

/*

  Realizar un programa utilizando un bucle mostrar la media y la suma de los números introducidos por el usuario hasta que metamos un número negativo
  y en ese caso se mostraría el resultado.

  Solucion Técnica:

  	-Se realizará la introducción de datos por parte del usuario utilizando la función promt() una vez obtenida esta información se guardará en una 
  	 variables -> numero -> después a travez de una variable acumuladora titulada suma se llevará la sumatoria de los datos ingresados
  	 por el usuario. Una vez se complete la suma_numeros otra variable llamada media_numeros llevará la media de los números digitados por el usuario.

  	 Una vez el usuario ingrese un número negativo se mostrará a través de un alert() la sumatoria y media de los números digitados.

*/

// VARIABLES

var numero = 0;

var suma_numeros;

var media_numeros;

var cont;

// FIN VARIABLES

// INICIO LÓGICA DE NEGOCIO ( Bucle Media y Sumatoria de números )

do{

	numero = parseInt(prompt("Digite un número:",0));

	//cont = 
	//if(numero < 0) ?  cont=0 : cont++;

}while(numero>=0)

alert("La sumatoria de los números es de: "+ suma_numeros +" y la media es de: "+media_numeros);

// FIN LÓGICA DE NEGOCIO 