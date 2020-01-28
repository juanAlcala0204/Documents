'use strict'

/*

    onclick = Es un evento el cuál reacciona en el momento que el usuario de click sobre
              el botón.

    Nota: Es mejor capturar todos los eventos desde el javascript

    NOTA IMPORTANTE:

        -Puedo hacer que el Javascript cargue después del DOM, así me evito que primero se cargue el DOM que el javascript.
         Así se cargará el javascript después de que cargue la página.
*/

// Con esta etiqueta hago que el código JavaScript dentro de este se cargue una vez se haya cargado el DOM así puedo llamar el javascript en el head
window.addEventListener('load', () => {

    // Eventos del ratón

    var boton = document.querySelector("#btn_presioname"); // Así se selecciona un objeto del DOM

    // Capturar Eventos Click

    boton.addEventListener('click', function(){
        cambiarColor(); //Esto es lo mismo que tener un onclick, esto es más eficiente porque lo capturo desde el JavaScript
    });

    // Mouse Over ( Cuando se pasa el mouse sobre el objeto )
    boton.addEventListener('mouseover', function(){
        boton.style.background = "#ccc"; // Con esta línea cambio el color
    });

    // MouseOut ( Se ejecuta cuando el suuario da click por fuera del objeto )

    boton.addEventListener('mouseout', function(){
        boton.style.background = "#fff";
    });

    // Focus
    var input = document.querySelector("#nombre"); // Así se selecciona un objeto del DOM

    input.addEventListener('focus', function(){
        console.log("Estas dentro del focus");
    });

    // Blur

    input.addEventListener('blur', function(){
        console.log("Ejecutas el vento blur");
    });

    // Keydown

    input.addEventListener('keydown', function(event){
        // El metodo String.fromCharCode(event.keyCode), sirve para traer que tecla se presiono
        console.log("Estas pulsando una tecla con keydown", String.fromCharCode(event.keyCode));
    });

    // Keypress

    input.addEventListener('keypress', function(event){
        // El metodo String.fromCharCode(event.keyCode), sirve para traer que tecla se presiono
        console.log("Estas pulsando una tecla con keypress", String.fromCharCode(event.keyCode));
    });

    // Keyup

    input.addEventListener('keyup', function(event){
        // El metodo String.fromCharCode(event.keyCode), sirve para traer que tecla se presiono
        console.log("Soltaste la tecla, evento keyup", String.fromCharCode(event.keyCode));
    });

}); // end load

