/**
 * 
 * Esta manera se tomó de Idiomatic.js, el cuál proporciona una manera de estilo en código a nivel de escritura en JavaScript.
 * 
 * "Todo el código en cualquier proyecto debería verse como si una sola persona lo hubiera escrito, sin importar cuánta gente haya contribuido"
 * 
 * 
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 */

/**  
 * 1. Espacios en blanco.
 * 
 * - Se decide trabajar únicamente con tabulaciones.
 * - Eliminar los espacios en blanco a la final de la línea.
 * 
 */

function nombreEjemplo() {
    //Tabular en cada línea que sea en cadena a la anterior. ¿Como así?, si algo va dentro de una función deberá tener tabulación.
    if ( condicion ) {
        // Así mismo con cada código en cadena que sea digitado.
    }
}

/**
 * 2. Sintaxos Elegante
 * 
*/

/** A. Párentesis, Llaves, Fines de línea */

// 2.A.1.1

if(condition) doSomething();

while(condition) iterating++;

for(let i = 0; i < 100; i++) someItetariveSolution();

// 2.A.1.1
//Uso de espacios para mejorar la legibilidad

if ( condition ) {
    // statements
}

while ( condiition ) {

}

for ( let i = 0; i < 100; i++) {

}

/** B. Asignaciones, Declaraciones, Funciones ( Nombradas, Expresiones, Constructores) */ 

//2.B.1.1
//Variables

let foo = "bar",
    num = 1,
    undef;

// Notaciones Literales

let array = [],
    object = {};

// 2.B.1.2

/** Siempre las declaraciones de las variables deben ir al inicio de su Scope */

function everyOneName() {
    let bar,
        foo;
    bar = "coso";
}

// 2.B.1.3

/** Declaración de funciones */

function nameOfFunction( arg1, arg2 ) {

}
//uso
nameOfFunction( arg1, arg2 );

// 2.B.1.4

function NameConstructor( options ) {

    this.options = options;
}
//uso
let fooBar = new nameConstructor({ a: "alpha"});

fooBar.options; // => { a: "alpha" }

/** C. Algunas  Excepciones */

// 2.C.1.1
// Funciones con callbacks
foo(function() {
    // Como se ve no hay espacio entre el primer paréntesis
    // y la palabra "function"
});

// Función que acepta un Array como parámetro, sin espacio entre ([
foo([ "alpha", "beta" ]);

// 2.C.1.2
// Función que acepta un objeto, sin espacio
foo({
    a: "alpha",
    b: "beta"
});

// Argumento único de tipo string, sin espacio
foo("bar");

/** D. Comillas */

// IMPORTANTE NUNCA MEZCLAR USO DE COMILLAS, SIEMPRE HACER USO DE COMILLAS SIMPLES AL INICIO 'ejemplo' Y SI ES NECESARIO LA INTERACCIÓN DE DOS
// SE DEBE HACER DE LA SIGUIENTE FORMA 'ejemplo="Like this"'

// SIEMPRE HACER USO DE LAS MILLAS INVERTIDAS `` SI SE VE UNA PERTIENENTE NECESIDAD

/** 
 * 
 * 3. Verificación de Datos y Tipos
 * 
 * REGLA DE ORO SIEMPRE PREFERIR === EN VEZ DE == EXCEPTO EN CASOS PARTICULARES DONDE NO SE REQUIERA UNA EVALUACIÓN FUERTEMENTE TÍPADA
*/

// A. Tipos

//String
typeof variable === "string";

//Number
typeof variable === "number";

//Boolean
typeof variable === "boolean";

//Object
typeof variable === "object";

//null
variable === null;

// null o undefined
variable == null;

// undefined

variabel === undefined;

/** B. Conversiones Implicitas de Tipos */

// Siempre hacer uso de operadores unarios, esto para por ejemplo convertir un string a number o un true a false

let foo = 1;

foo = document.getElementById("foo-input").value; // Si te obtiene de esta forma, foo será un string, en cambio:

foo = +document.getElementById("foo-input").value;
//     + Al hacer uso del operador unario ( + ) lo que esté a la derecha se convertirá en un número.


/** 
 * 
 * 4.Evaluación Condicional
 * 
 */

 // 4.1.1

 /** Para saber si un array tiene algún elemento */
 if ( array.length );

 // 4.1.2

 /** Cuando solo evaluamos que un array esté vacío */
 if ( !array.length ); // Esto porque cuando un array está vacío, dará como resultado un false al evaluarse la variable

 // 4.1.3

 /** Cuando queremos ver que un string no es vacío */
 if ( string ); // Se evalua por la variable, si el string no está vacío, devolverá un true

 // 4.1.4

 /** Cuando queremos saber si un string está vacío */

if ( !string ); // De esta form asi esta vacío devolverá un false

// 4.1.5

/** Cuando evaluamos si una variable es true */

if ( variable ); // Al evaluarse así no hace que no sea necesario el variable === true

// 4.1.6

/** Si queremos saber si la variable es false */
if ( !variable ); // Esto evaluará si el valor es false

// IMPORTANTE, DE ESTA FORMA ANTERIOR TAMBIÉN DARÁ FALSE SI EL VALOR ES 0, "", null, undefined, NaN
// SI SE DESEA SABER SI SOLO ES FALSE UTILIZAR EL ===
if ( variable === false );

// 4.1.7

/** Si se desea saber cuando una variable es null o undefined pero NO false, "" or 0 */
if ( variable == null ); // Recuerda usar == hará que sea true cuando es null o undefined

/**
 * 
 * 6. NAMING - NOMBRAMIENTO
 * 
 */

// 6.A.1.1
// Nombramiento funciones, objetos, instancias, etc.

calmelCase; // Función y declaración de variable

// Si es una constante entonces será 

const DE_ESTA_MANERA;

//6.A.1.2
// Nombremiento constructores, prototypes, clases, etc.

PascalCase; // Función constructora etc.

// 6.A.1.3
// Nombramiento expresiones regulares

rDesc = '//';


