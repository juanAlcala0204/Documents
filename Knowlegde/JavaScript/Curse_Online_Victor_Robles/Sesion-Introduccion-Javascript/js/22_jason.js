'use strict'

// JSON - JavaScript Object Notation

// Se crea un objeto JSON de la siguiente manera:

// Objeto
var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'USA'
};

//Array de Objetos
var peliculas = [
    {titulo: "La verdad duele", year: 2016, pais : "Francia"},
]

var caja_peliculas = document.querySelector("#caja_peliculas");
var caja_peliculas2 = document.querySelector("#caja_peliculas2");
// Se recorre un objeto
for(let index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo);
    caja_peliculas.append(p);
}

peliculas.forEach((elemento, index)=>{
    var p = document.createElement("p");
    p.append(index.titulo);
    caja_peliculas2.append(p);
});
    

// Para acceder a una propiedad de este objeto se hace así:
console.log(peliculas.titulo);