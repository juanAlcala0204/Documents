// Declaración variables constantes
const nombre = 'Juan',
    apellido = 'Alcala';

// Declaración variables Locales
let nombreCompletoEnMayuscula,
    apellidoEnMinusculas,
    primeraLetraNombre,
    obtenerTamañoString;


/**
 * ************************************ FUNCIONES EXPRESADAS************************************** 
 */

/**
 * Función para Colocar la cadena en mayúsculas y devolver la cadena en Mayúsculas.
 * @param {string} args 
 * @returns {string}
 */
const colocarStringEnMayuculas = (args) => args.toUpperCase();

/**
 * Función para Colocar la cadena en minúsculas y devolver la cadena en Mayúsculas.
 * @param {string} args 
 * @returns {string} 
 */
const colocarStringEnMinusculas = (args) => args.toLowerCase();

/**
 * Función para obtener el primer carácter de la cadena pasada como parámetro.
 * @param {string} args 
 * @returns {string}
 */
const obtenerPrimeraLetraDelString = (args) => args.charAt(0);


/** ********************** LÓGICA ********************************************************************* */

nombreCompletoEnMayuscula = `Mi nombre en mayúsculas es: ${colocarStringEnMayuculas(nombre)} y mi apellido es: ${colocarStringEnMayuculas(apellido)}`;

primeraLetraNombre = obtenerPrimeraLetraDelString(nombre);

obtenerTamañoString = nombre.length;

obtenerCaracteresDelStrings = nombre.substr( 1 , 2 );


/****************************************IMPRESIÓN POR CONSOLA RESULTADOS ***********************************/
console.log(nombreCompletoEnMayuscula);
console.log(`Mis variables iniciales son ${nombre} y ${apellido}`);
console.log(`Tamaño de mi cadena elegida es: ${obtenerTamañoString}`);
console.log(`Carácteres elegidos son: ${obtenerCaracteresDelStrings}`);
