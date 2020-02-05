/**
 * 
 * En esta Sección se mostrará como se debería comentar el código JavaScript
 * 
 */

 /** Al inicio del fichero debería tener la siguiente estructura */

 /**
  * @fileoverview Suma suma.js, Archivo de validación y ejecución de sumas.
  * 
  * @author Juan David Alcala Sanchez
  * @copyright comentaesteprograma.com
  * 
  */


 /** Si es un caso puntual de una variable, comentar para que se usará */
 let tempUser; // Esta variable está designada para guardar temporalmente al Usuario

 /** Comentarios para una función */

 /**
  * Función para sumar los parametros otorgados por el Usuario, retornará el resultado de la suma.
  * 
  * @param {number} arg1 
  * @param {number} arg2
  * @return {number} sum 
  */
 function nameOfFunction( arg1, arg2 ) {
     let sum = 0;

     sum = arg1 + arg2;

     return sum;
 }