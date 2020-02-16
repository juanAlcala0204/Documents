/**
 * 
 * Realizar una función llamada imprimirNombreYEdad que tiene que imprimir la presentación de un usuario
 * osea, el nombre del usuario la edad y algo que el quiera decir.
 * 
 */

/**
 * @fileoverview Archivo concontenido del desafio de Platzi en clase número 6 de Fundamentos - JavaScript
 * @author Juan David Alcala Sanchez
 */


const validacionIngresoDatosUsuario = ( datosUsuario ) => {
    try {
        for ( const indice in datosUsuario ) {
            if (!datosUsuario[indice]) throw false;
        }
        return true;
    } catch (error) {
        return error;
    }
}

/**
 * Función para lanzar una alerta al usuario y en el caso de que sea un error, se enviará por consola.
 * @param {String} texto
 * @param {Array} alertaTipoError
 */
const imprimirEnPantalla = ( textoImprimir, alertaTipoError = [true] ) => {
    if (!alertaTipoError[0]) {
        alert(textoImprimir); 
        console.error(`Error presentado en el sistema: ${alertaTipoError[1]}`)
    } else {
        alert(textoImprimir);
    } 
}


const obtencionDeDatosUsuario = () => {
    const mensajeErrorAlUsuario = 'El sistema presentó un error, por favor comunicarse con soporte';
    let usuarioDatos = {},
        validacionDatos = false;

    do {
        try {
            usuarioDatos = {
                nombreUsuario : '',
                edadUsuario : '',
                textoHabilidadesUsuario : ''
            }

            usuarioDatos.nombreUsuario = prompt('Digita tu nombre:');
            usuarioDatos.edadUsuario = prompt('Digita tu edad:');
            usuarioDatos.textoHabilidadesUsuario = prompt('Digita tu presentación:');

            validacionDatos = validacionIngresoDatosUsuario( usuarioDatos );
            if (typeof validacionDatos !== 'boolean') {
                throw validacionDatos;
            } else if(validacionDatos){
                return usuarioDatos;
            }
        } catch (error) {
            imprimirEnPantalla( mensajeErrorAlUsuario, [ false, error ] );
        }
    } while (!validacionDatos);
}

let datos;

datos = obtencionDeDatosUsuario();

if(datos != null) imprimirEnPantalla( `Hola me llamo ${datos.nombreUsuario} y tengo ${datos.edadUsuario} mis habilidades son: ${datos.textoHabilidadesUsuario}` )