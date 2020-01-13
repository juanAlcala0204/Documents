'use strict'

/*

    DOM => Document Object Model

*/

/*

    BOM => Browser Object Model

*/

// Sacar tamaño de la pantalla

console.log(window.innerHeight);

// Sacar Anchura pantalla

console.log(window.innerWidth);

// Sacar La altura y anchura de la pantalla del usuario

console.log(screen.width);
console.log(screen.height);

// Cambiar un href de la página

console.log(window.location); // Obtiene URL actual del navegador

// Funcion para abrir una ventana

function abrirVentana(url){
    window.open(url,"","width=400,heigth=400");
}