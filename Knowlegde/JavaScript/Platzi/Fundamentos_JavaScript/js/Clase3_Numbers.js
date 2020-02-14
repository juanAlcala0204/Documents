// Declaración variables

let edad,
    resultadoOperadoresNumbers;

edad = 27;

/** Incrementar Valores en JavaScript */

edad += 1; // Esto es igual a yo decir edad = edad + 1;

/** Decrementar Valores en JavaScript */

edad -= 1; // Esto es igual a yo decir edad = edad - 1;

/** OPERADORES EN NUMBERS */

// Sumatoria

resultadoOperadoresNumbers = 1 + 2;

// Resta

resultadoOperadoresNumbers = 5 - 2;

// Multiplicacion

resultadoOperadoresNumbers = 2 * 5;

// Division

resultadoOperadoresNumbers = 10 / 2;

// Residuo

resultadoOperadoresNumbers = 45 % 5; // Lo que queda de la división.


/** FUNCIONES CON NUMBERS EN JAVASCRIPT */

resultadoOperadoresNumbers = Math.round( 5 / 3 ); // Esta función redondea la operación que se envíe como parámetros.

resultadoOperadoresNumbers = resultadoOperadoresNumbers.toFixed(3); // Esta función muestra el número de decimales que especifiques, recuerda el resultado que devuelve la está función es un string.

resultadoOperadoresNumbers = parseFloat(resultadoOperadoresNumbers); // Esta función convierte el valor enviado a Number tipo Float
