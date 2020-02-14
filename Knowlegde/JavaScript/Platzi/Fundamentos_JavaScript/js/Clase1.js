/** Interacción con la consola. */
console.log('De esta manera puedo acceder y lanzar mensajes por consola');

/** Declaración variables. */

var variableGlobal; //Cuenta con un scope global.
let variableLocal; //Depende del scope en el que es declarada.
const VARIABLE_CONSTANTE; //Variable dependiente del scope donde está escrita y inmutable.


/** Inicialización de Variables */

variableLocal = 'Juan'; // Arriba se declaró la variable y en est ocasión estamos dandole un valor por ende la estamos incializando.

/** Concatenar en JavaScript */

let textoConcatenado;

textoConcatenado = 'Este es un texto con variables concatenadas 1.'+variableLocal+'.';

/* 

Nota: También se puede usar la anera de plantillas de texto, estas se usan para realizar un String dentor del cuál se necesitará concatenar
código Javascript.

*/

textoConcatenado = `Este es un texto con comillas invertidas 1.${variableLocal}`;

/** IMPORTANTE:
 * 
 * - JavaScript es un lenguaje de tipado débil.
 * 
 */
