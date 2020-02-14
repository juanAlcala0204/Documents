/**
 * @fileoverview Archivo que contiene la lógica y solución del Desafio inpuesto en la clase número dos de Platzi - Fundamentos de JavaScript.
 * @author Juan David Alcala Sanchez
 */

// Declaración de variables.
let nombreUsuario,
    letrasDelNombreUsuarioExtraidas;

/** *****************************************************FUNCIONES EXPRESADAS********************************************************************************** */

/**
 * Función para obtener los carácteres que se encuentren en la posición solicitada de la cadena. Puede ser enviado una sola posición o un rango de carácteres
 * entre dos posiciones.
 * @param {String} cadena 
 * @param {String} rangoPosiciones 
 * @returns {String} //Se retorna los carácteres solicitados.
 */
const obtencionCaracteresPedidosDeLaCadena = ( cadena, rangoPosiciones ) => ( rangoPosiciones.length > 1) ? cadena.substr( rangoPosiciones[0], rangoPosiciones[1] ) : cadena.substr( rangoPosiciones[0]);    

/**
 * Función para lanzar una alerta al usuario y en el caso de que sea un error, se enviará por consola.
 * @param {String} texto
 * @param {Array} alertaTipoError
 */
const imprimirEnPantalla = ( textoImprimir, alertaTipoError = [true] ) => {
    if (!alertaTipoError[0]) {
        alert(textoImprimir); 
        console.error(`Error presentado: ${alertaTipoError[1]}`)
    } else {
        alert(textoImprimir);
    } 
}

/**
 * Función para Obtener el nombre del usuario que digitará a través de un prompt, también se hará la validación de que si sea ingresado algo. si no, se seguirá
 * preguntando por el nombre.
 */
const obtenerNombreUsuario = () => {
    let tempNombreUsuario, // Temporal que contendrá lo digitado por el usuario.
        condition;
    do {
        try {
            tempNombreUsuario = prompt('Digita tu nombre:');
            if (tempNombreUsuario) break;
        } catch (error) {
            imprimirEnPantalla('Se presento un error por favor comunicarse con soporte.',[ false, error ]);
            break;
        }
    } while (!condition);
    return  tempNombreUsuario;
}

/** *********************************** LÓGICA *************************************************** */

nombreUsuario = obtenerNombreUsuario();

if (nombreUsuario != null) {
    // En este caso se enviará a la función las posiciones pertinentes para obtener la última posición de nuestra cadena.
    letrasDelNombreUsuarioExtraidas = obtencionCaracteresPedidosDeLaCadena( nombreUsuario, [(nombreUsuario.length-1)]);
    imprimirEnPantalla(`Los carácteres entre los rangos de posiciones es: ${letrasDelNombreUsuarioExtraidas}`);
}

