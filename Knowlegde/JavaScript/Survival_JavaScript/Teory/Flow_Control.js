/**
 * 
 * JavaScript como mcuhos otros lenguajes manejan controles de flujo.
 * 
 * Estos son las diferentes sentencias que se conocen para crear ciclos, comparaciones y condicionales para ejecución de
 * cierto código.
 * 
 */

 /**
  * 
  * IF (CONTROL DE FLUJO COMPARATIVO)
  * 
  * Esta sentencia nos va a servir para ejecutar un segmento de código dependiendo si este cumple la condición puesta
  * en nuestro control.
  * 
  * Sintaxis:
  * 
  * if ( condicion ) {
  * 
  * }
  * 
  * También este tipo de control cuenta con una situación en donde no se cumpla nuestra condición inicial.
  * 
  * Sintaxis:
  * 
  * if ( condicion ) {
  *     //si se cumple ejecutara este código
  * } else {
  *     // si no cumple ejecutará este código.
  * }
  */


  if ( variable === otraVariable) {
    seEjecutaraEstaFuncion(); // Se ejecutará esta función si se cumple nuestra condición
  } else {
      noCumplioLaCondicion();
  }



  /**
   * 
   * FOR ( CICLO )
   * 
   * En JavaScript cuenta con sentencia for, esta nos ayudará a detonar un ciclo. El cuál permitirá la ejecución del código dentro de esta
   * repitiendose una y otra vez hasta que la condición del for no sea válida.
   * 
   * Sintaxis:
   * 
   * for ( let i = 0; i < variable.length; i++) {
   *    // Codigo a ejecutarse en el ciclo
   * }
   * 
   */

   // DIFERENTES TIPOS DE FOR

   // ---> Clásico

   for ( let i = 0; i < variable.length; i++ ) {
       ejecutarseEsto();
   }

   // ---> Forma 2
   /** Se usa conmúnmente para la ejecución y lectura de objetos. */
   for ( let i in algunObjeto ) {
        codigoAEjecutarse( algunObjeto.name );
   }

   // ----> Forma 3
   /** Se usa más comúnmente para lectura de Arrays */

   /** La función forEach recibe como algumentos el elemento y el indice del array, entonces elemento será el valor de la posición en la que este
    * el array
    */
   algunArray.forEach( ( elemento , indice )  => {
       posicionActual = indice;
       valorUsandoIndice = algunArray[indice];
       valorUsandoElArgumentoElemento = elemento; 
   });

   /**
    * 
    * WHILE ( CICLO )
    * 
    * While es otra sentencia que nos permitirá detonar un ciclo en JavaScript, esta se entiende como "mientras" la condición se cumpla
    * se repitirá el código dentro de esta sentencia.
    * 
    * Sintaxis:
    * 
    * while ( condicion ) {
    *   //Código a ejecutarse
    * }
    * 
    */

    while ( i < variable ) {
        temp = codigoAEjecutarse();
        if ( !temp ) i++;
    }

    /**
     * 
     * DO WHILE ( CICLO )
     * 
     * Do while es un ciclo con la similitud del while, la diferencía rebasa en que en este caso se ejecutará lo que este dentro del do
     * y después se preguntará por la condición del ciclo y se repetirá hasta que esa condición no se cumpla más.
     * 
     * En cambio en el while, antes de ejecutarse el código dentro de la sentencia se preguntará primero por la condición.
     * 
     */

     do {

        hazEstoMientras();
        
     } while ( condicion );

