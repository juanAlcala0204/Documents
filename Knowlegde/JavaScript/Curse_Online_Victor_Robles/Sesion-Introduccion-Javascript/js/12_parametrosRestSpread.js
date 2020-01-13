'use strict'

//Parámetros REST y SPREAD

function listadoFrutas(fruta1, fruta2){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
}

listadoFrutas("Naranja","Manzana"); 

//Para capturar un número indefinido de parámetros se utiliza de la siguiente manera.

function listadoFrutasRestySpread(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
}

listadoFrutasRestySpread("Naranja","Manzana","Sandia","Naranjasadsd","Otra Fruta");

/*
    El uso de parametros SPREAD siginifica que yo puedo enviarle como parametro un array a la función y si le coloco
    ... (tres puntos) adelante el interpretará que cada indice es un valor en el orden que se haya definido de 
    parámetros en la función.

    En el ejemplo vemos que se manda frutas el cual es una array pero al ponerle tres puntos adelante la función
    interpretará que es un parámetro SPREAD osea que el cogera por cada indice del array frutas y lo pasará
    a cada valor de los parametros difinidos en la función en este caso el primer valor del array sería
    el primer parámetro que se definió en la función.
*/

var frutas = ["Naranja", "Manzana"]

listadoFrutasRestySpread(...frutas,"Sandia","Naranjasadsd","Otra Fruta");
