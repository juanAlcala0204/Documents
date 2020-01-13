'use strict'

var categorias = ["Accion", "Terror", "Comedia"];
var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

// Creación array multidimensional o matriz
var cine = [categorias, peliculas];

console.log(cine[0][1]);

// PARA AÑADIR ELEMENTOS AL ARRAY
// Esto se realiza con el  metodo push
peliculas.push("Batman"); 

// Con el metodo .pop() eliminas el último elemento del array

peliculas.pop(); 

// Convertir un array a un string 

var peliculas_string = peliculas.join();

// Convertir un string en un array

var cadena = ["asdas","asdasd","asd"];
var cadena_array = cadena.split(", ");

// Ordernar un array, el metodo sort me lo va a ordenar por orden alfabetico

peliculas.sort();

// Metodo reverse pondrá el orden del array al revés

peliculas.reverse();

// Metodo find() para buscar en un array
var arrayPrueba = ["Hola", "Cstm", "Fuck you"];

var lenguaje = arrayPrueba.find(lenguaje =>{
    return lenguaje == "Hola";
});

console.log(lenguaje);