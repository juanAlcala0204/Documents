'use strict'

// CREACION DEL ARRAY
var arrayPrueba = ["Hola", "Cstm", "Fuck you"];

// ITERACIÓN DEL ARRAY

//FORMA 1


// FORMA 2
arrayPrueba.forEach( (valor, indice)=>{
    document.write(`<p>${indice} : ${valor}</p>`);
});

// FORMA 3
// Lenguaje es el indice en el que esta el array
for(let lenguaje in arrayPrueba){
    document.write(`<p>${arrayPrueba[lenguaje]}</p>`);
}

// PARA AÑADIR ELEMENTOS AL ARRAY
// Esto se realiza con el  metodo push
arrayPrueba.push("FUCCKKK");

// Con el metodo .pop() eliminas el último elemento del array

arrayPrueba.pop(); 

// Convertir un array a un string 

// var peliculas_string = peliculas.join();

// Convertir un string en un array

var cadena = "asdas,asdasd,asd";

var cadena_array = cadena.split(",");

// Metodo find() para buscar en un array
var arrayPrueba = ["Hola", "Cstm", "Fuck you"];

var lenguaje = arrayPrueba.find(lenguaje =>{
    return lenguaje == "Hola";
});

console.log(lenguaje);