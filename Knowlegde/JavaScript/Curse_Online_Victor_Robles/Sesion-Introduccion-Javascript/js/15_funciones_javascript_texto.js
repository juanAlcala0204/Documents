'use strict'

// Transformación de Textos

var numero = 44;
var texto1 = "Bienvenido a mi prueba gigigi";
var texto2 = "Prueba de texo 2 ggigigiig";

// Este método convierte un Number a un String
var dato = numero.toString();

// Este método convierte un texto en Mayúculas
var datoMayusculas = texto1.toUpperCase();

// Este método convierte un texto en Minuscúlas
var datoMinusculas = texto1.toUpperCase();

//Calcular longitud (Sirve para ver si hay algo en el texto o no) si me da undefined o 0 no existe texto

// Nota el length sirve para contar que hay algo.
var nombre = "";
var longitud = nombre.length;

// Como concatenar - Unir Textos con el metodo .concat

var textoTotal = texto1.concat(" "+texto2);

// METODOS PARA BUSCAR COSAS DENTRO DE UN TEXTO

//Busca desde donde empieza la palabra buscada
var busqueda = texto1.indexOf("curso");
var busqueda = texto1.search("curso"); // Si no existe devolvería un -1 osea que no encontró
var busqueda = texto1.match("curso"); // Entrega un array con donde muestra la posición donde se buscó entre otra info.
var busqueda = texto1.substr(14,5); // Aquí saca desde el carácter 14, 5 en adelante
var busqueda = texto1.charAt(44); // Aquí saca una letra en especial
var busqueda = texto1.startsWith(); // Este metodo busca la palabra desde el principio de un string, me devolverá true si lo encontró
var busqueda = texto1.endsWith(); // Este metodo busca la palabra desde al final de un string, me devolverá true si lo encontró
var busqueda = texto1.includes("curso"); // Este metodo busca en un String un palabra y devuelve true si encontró y false si no


//Busca desde donde empieza ultima de la palabra buscada
var busquedaUltima = texto1.lastIndexOf("curso");


// FUNCIONES PARA REEMPLAZAR TEXTO

// reemplaza la primera palabra por la segunda
var reemplazar = texto1.replace("JavaScript", "Symphony");

// para cortar un string, el metodo corta desde la posicion que se especifique.
var cortar = texto1.slice(14);

// Para separarlo y convertirlo en un array
var separar = texto1.split(" ");

// Para quitar los espacios
var quitar_espacios = text1.trim();



console.log(nombre.length);