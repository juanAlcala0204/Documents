'use strict'

//Pruebas con Let y var

// Prueba con Var
var numero = 40; // valor 40
console.log(numero); // valor 40

if(true){
  // Las variables creadas con 'var' se cambiarán globalmente
  var numero = 50;
  console.log(numero); // valor 50
}
console.log(numero); // valor 50

//Pruebas con Let

var texto = "Primer texto";
console.log(texto); // valor Primer Texto

if(true){
  /*
     Las variables creadas con let hacen una creaciòn de la variable a nivel del
     bloque en el que estan creadas, se refiere que no se cambia globalmente
     si no que solamente afecta en el bloque de código donde la utilices
     let texto = "Texto con Let";
  */
  console.log(texto); // valor texto con Let;
}

console.log(texto); // Valor Primer Texto
