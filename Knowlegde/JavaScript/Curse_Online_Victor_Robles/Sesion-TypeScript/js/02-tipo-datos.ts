/* 
    Tipos de Datos
*/

// Strings
let cadena: string = "Prueba";

// Number
let numero: number = 12;

// Boleano
let verdadero_falso: boolean = true;

// Any, tipo de dato que permite asignarle cualquier otro valor
let cualquier: any = "Hola";

// Se puede asignar mas tipos de datos para una variable
let cadena2: string | number = "prueba jaja";

// Tipo de dato personalizado para formar un alias
type alfanumerico = string | number;

let alfa: alfanumerico = 12;

//Arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];
// Otra forma de definir un array
let years: number[] = [12, 13, 14];

// console.log(numero);
