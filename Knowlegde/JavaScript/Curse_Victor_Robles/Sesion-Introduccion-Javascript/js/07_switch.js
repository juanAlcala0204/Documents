'use strict'

/*

  SWITCH
  -Es una esctructura de control que nos permite hacer muchas condicionales
   de una manera mucho más organizada.

*/
var edad = 21;
var imprime = "";

// Forma de hacer el SWITCH.

/*
  switch (dato que será visualizado en los case) {
    
    case (el caso que debe entrar cuando es el dato traído del switch):
    // Rompe el case, y pasa al a siguiente. 
    break;

    / El Default se utiliza en el caso que no se encuentra en ningún case.
    default:

  }
*/
switch (edad) {
  case 18:
      imprime = "Acabas de cumplir 18";
  break;
  case 20:
      imprime = "Tienes mas de 18, tienes "+edad;
  break;
  default:
    imprime = "Tu edad no esta contemplada";
}

console.log(imprime);
