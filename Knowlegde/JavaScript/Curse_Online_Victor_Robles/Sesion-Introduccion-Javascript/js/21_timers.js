'use strict'

window.addEventListener('load', () => {

    function intervalo(){
        // Tiempo
        // Con este evento, se ejecuta algo en el tiempo respectivo que se ponga.
        var tiempo = setInterval(function(){
            console.log("Set interval ejectudo");
        }, 3000);
    }
    
    // Para ejecutarse una sola vez
    var tiempoConTime = setTime(function(){
        console.log("Set interval ejectudo");
    }, 5000);

    var stop = document.querySelector("#stop");

    stop.addEventListener("click", () =>{
        // Para parar el Interval se puede usar la función ClearInterval();
        alert("Se ha parado el intervalo en bucle");
        clearInterval(tiempo);
    });

    var start = document.querySelector("#start");

    start.addEventListener("click", () =>{
        // Para iniciar el Interval se puede usar la función ClearInterval();
        alert("Se ha iniciado el intervalo en bucle");
        clearInterval(tiempo);
        intervalo();
    });
    
});