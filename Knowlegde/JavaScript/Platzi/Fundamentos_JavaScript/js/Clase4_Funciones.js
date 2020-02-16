const NOMBRE = 'Juan';

let edad;

edad = 18;

/**
 * Las funciones son una forma de reutilizar cierto bloque de código el cuál se ejecutará una vez llamada nuestra función.
 */
function imprimirEdad( edadUsuario, nombreUsuario ) {
    if ( edad >= 18 ) {
        console.log(`El usuario ${nombreUsuario} es mayor de edad`);
    }
}

imprimirEdad( edad, NOMBRE );