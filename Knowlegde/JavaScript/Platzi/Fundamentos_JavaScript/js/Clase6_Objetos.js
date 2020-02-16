
// Implementación de objetos
let sacha = {
    nombre: 'Juan',
    apellido: 'Alcala',
    edad: 18
}

const imprimirNombrEnMayusculas= nombre => console.log(nombre.toUpperCase());

//Ejemplos de enviar algún dato de un objeto - Forma 1 - Enviandolé el valor como tal que se necesita del objeto.
imprimirNombrEnMayusculas( sacha.nombre );

// Forma dos - Enviandole el objeto, y desde la función accediendo al valor que quieres
imprimirNombrEnMayusculas( sacha );

// Forma 3 - Desglosando el objeto desde la función
// LO importante es siempre que se desglosa el objeto debes estar seguro de que siempre llegará el objeto y atributo que se espera
const imprimirNombrEnMayusculasDesglosandoObjeto = ({ nombre }) => console.log(nombre.toUpperCase());

imprimirNombrEnMayusculasDesglosandoObjeto( sacha );
// Una manera de enviarle sería así o el obejto como arriba
imprimirNombrEnMayusculasDesglosandoObjeto({ nombre: 'Pepito' });



/**
 * 
 * Formas y datos interesantes de los objetos.
 * Desestructuración de Objetos.
 */

 function pruebaConObjetos( argsObejto ) {
    // let nombre = argsObejto.nombre;
    // Esto es igual a yo decir.
    let { nombre } = argsObejto;
 }
