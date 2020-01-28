'use strict'

/*
1.Pida 6 números por pantalla y los meta en un array
2.mostrar el array entero ( todos sus elementos ) en el cuerpo de la página y en la consola
3. Ordenarlos y mostrarlo
4. Invertir su orden y  mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Búsqueda de un valor introducido por el usuario, y nos diga si está en el array y diga su indice.
*/

var arrayNumeros = new Array();
do{

    var nuevo_elemento = parseInt(prompt("Digite un número",0));
    arrayNumeros.push(nuevo_elemento);
    console.log(arrayNumeros.length);

}while(arrayNumeros.length < 7);

/* ********************************************************** */
console.log(arrayNumeros);

/* ********************************************************** */
var html = "Se mostrarán los datos del array:";

imprimir(html,arrayNumeros);

/* ********************************************************** */
arrayNumeros.sort();

var html = "Se mostrarán los datos ordenados del array:";

imprimir(html,arrayNumeros);

/* ********************************************************** */
arrayNumeros.reverse();

var html = "Se mostrarán los datos al revés del array:";

imprimir(html,arrayNumeros);

/* ********************************************************** */
var html = "Cantidad de datos en el array:"+arrayNumeros.length;

imprimir(html);

/* ********************************************************** */
var busqueda = parseInt(prompt("Que número desea buscar: ",0));
var buscado = arrayNumeros.findIndex(numero => numero == busqueda);
var respuesta = buscado && buscado != -1 ? "El numero esta en el indice:"+buscado : "No se encontro el número en nignuna posición";
imprimir(respuesta);

/* FUNCION */
function imprimir(texto = "",array = ""){

    if(array != ""){
        if(texto != ""){
            document.write(`<p>${texto}</p><br>`);
        }
        array.forEach((element, indice) => {
            document.write(`<p>indice:${indice}, valor: ${element}</p><br>`);    
        });
    }else if(texto != ""){
        document.write(`<p>${texto}</p><br>`);
    }

}
console.log(arrayNumeros);
