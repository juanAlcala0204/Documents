'use strict'

// Funciones anonimas
// Es una función que no tinee nombre

var pelicula = (nombre) => {
    return "La pelicula es: " + nombre;
}

// Como se llama ? simplemente se llama el nombre de la variable.

// CALLBACKS

// Es cuando se pasa por parámetros a una función, una función.

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5, 7, function(dato){
    console.log("La suma es:", dato);
},
function(dato){
    console.log("La suma por dos es:",(dato*2));
});

// Función de Flechas
// En lugar de poner function solo se pone una flecha así de la siguiente manera.
// También se puden quitar los parentesis si solamente es un parametro, si es mas de uno se necesitan los parentesis
sumame(5, 7, (dato) => {
    console.log("La suma es:", dato);
},
(dato) =>{
    console.log("La suma por dos es:",(dato*2));
},
// ATENCION IMPORTANTE SI SE HACE UN CALLBACK DE RETURN
// Hacer esto:
(dato) =>{
    return dato;
},
// Es igual hacer esto:
dato => dato
);

