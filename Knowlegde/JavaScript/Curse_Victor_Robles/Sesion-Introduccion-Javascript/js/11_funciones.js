'use strict'

//Funciones

/*

    Una función es una agrupación reutilizable de un conjunto de instrucciones.

*/

//Creacion Funciónes

function calculadora(){
    // Si se coloca return la función devolverá algo.
    return "Hola soy la calculadora";
}

// Parámetros
var pruebaSuma = parametros(1,2);
console.log(pruebaSuma);


function parametros(uno,dos){
    var sumar = uno+dos;
    return sumar;
}


// Parámetros Opcionales

var pruebaSumaOpcionales = parametrosOpcionales(1,2);
console.log(pruebaSumaOpcionales);
var pruebaSumaOpcionales = parametrosOpcionales(1,2,true);
console.log(pruebaSumaOpcionales);


function parametrosOpcionales(uno, dos, mostrar = false){
    if(mostrar != false){
        var sumar = uno+dos;
    }else{
        var sumar = "No se sumará";
    }
    
    return sumar;
}

