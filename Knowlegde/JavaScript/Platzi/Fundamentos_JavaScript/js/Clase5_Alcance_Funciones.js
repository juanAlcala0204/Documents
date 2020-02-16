let nombreUsuario;

var nombreGlobal;

nombreGlobal = 'sacha';
nombreUsuario = 'juan';

function imprimirNombreEnMayúsucla( nombre ) {
    // Las variables que son definidas como argumentos d ela función son de alcance local. osea únicamente se podrá modificar y acceder a esta
    // dentro de la función que fue definida
    console.log(nombre.toUpperCase());
}
// ESTA FUNCIÓN TIENE UN EFECTO SIDE EFFECT ( SE LE DENOMINA CUANDO SE MODIFICA UNA VARIABLE GLOBAL )
function imprimirNombreEnMayúsuclaSideEffect() {
    // AQUÍ PUEDE ACCEDER A LA VARIABLE GLOABL QUE FUE DECLARADA ANTERIORMENTE, Y PUEDE POR ENDE MODIFICARLA
    nombreGlobal = nombreGlobal.toUpperCase();
    console.log(nombreGlobal);
}

imprimirNombreEnMayúsucla( nombreUsuario );

/**
 * 
 * NOTA IMPORTANTE
 * 
 * PUEDES ACCEDER A VAIRBALES GLOBALES SI ACCEDES AL OBJETO WINDOW YA QUE LAS VAIRBALES GLOBALES DE JAVASCRIPT ESTARÁN DENTRO DE WINDOW
 */