/**
 * 
 * ¿Qué es JavaScript?
 * 
 * JavaScript Es un lenguaje interpretado de scripting multiplataforma, además de esto JavaScript es un lenguaje liviano y de tipado débil.
 
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * ¿Que es lo que hay que tener en cuenta en JavaScript?
 * 
 * Algo importante a tener en cuenta es que JavaScript es un lenguaje de un solo subproceso, ¿A qué se refiere esto?
 * 
 * JavaScript es interpretado por cada navegador a través de un JavaScript Engine ( Motor de JavaScript ) ejemplos padres de un caso sería
 * el de Google con su V8 Engine.
 * Este motor consta de dos partes:
 * 
 * Memory Heap ( Memoria ) => Es donde se maneja la distribución de memoría de JavaScript
 * 
 * Call Stack ( Pila de Llamadas a Funciones ) => Es donde JavaScript controla cada interpretación del código, en otras palabras es el punto
 *                                                en el que va el código. 
 *                                                El comportanmiento de esta es parecida al de una pila. Por esta razón se dice que es de un
 *                                                solo subproceso. Ya que lo primero en entrar es lo último en salir y lo último en entrar sería
 *                                                lo primero en salir.
 * 
 * Overflowing es la denominación que se le hace cuando el navegador recibe muchas Call Stack, esto se ve presente
 * cuando en un navegador ejecuta la alerta de que se ha detenido o que esta pausada la página.
 * 
 * El error por el cuál se identifica este caso más fácil es:
 * 
 * Uncaugth RangeError: Maxium Call Stack size Exceded.
 * 
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * 
 * IMPORTANTE: JavaScript esta regido por el ECMAScript, este se encargá de partir las versiones de JavaScript.
 */