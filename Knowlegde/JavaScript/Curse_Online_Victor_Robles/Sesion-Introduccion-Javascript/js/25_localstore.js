'use strict'

// Localstorage
/*
 Es una memoria que se guarda en el navegador. ( Diferente a los datos de Sesiòn )
 El localstorage es por Dominio.
*/
// Como comprobar si el navegador es compatible

if(typeof(Storage) !== 'undefined'){
    console.log("Localstorage disposible");
}else{
    console.log("Localstorage NO disposible");
}

// Como guardar un dato en el Localstorage

localStorage.setItem("titulo","Curso de Symfony");

// Como recuperar un elemento 

console.log(localStorage.getItem("titulo"));

// Guardar Objetos JSON

var usuario = {
    nombre: "Victor",
    email: "vicortasda",
    edad: 18
};
//  Convertir un Objeto JSON a un JSON STRING
localStorage.setItem("usuario",JSON.stringify(usuario));

// Recuperar Objeto JSONSTRING  ( Este metodo vuelve un objeto JSONSTRING a  un JSON normal)

var userjs = JSON.parse(localStorage.getItem("usuario"));

// Borrar un dato del Localstorage 
// Lo que va dentro de los "" es la key del dato guardado
localStorage.removeItem("usuario");

// Borrar todos los datos del Localstorage

localStorage.clear();