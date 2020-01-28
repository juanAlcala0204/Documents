'use strict'

/*

 Constantes
 Una Constante es un contenedor de información ( VARIABLE) pero su contenido nunca
 podrá ser cambiado.

*/

var web = "web";
//Las variables Constantes se crean con "const"
const ip = "192.168.3.2";

// Las variables que no son constantes deja cambiarlas
web = "Me deja cambiarla";
/*
  Las variables Constantes nunca dejará cambiar el valor
  Este generará un error titulado como
  Uncaugth TypeError: Assigment to constant variable. que significa que no puedes
  cambiar el valor de una constante.
*/
ip="132.45.6.7";

console.log(web, ip);
