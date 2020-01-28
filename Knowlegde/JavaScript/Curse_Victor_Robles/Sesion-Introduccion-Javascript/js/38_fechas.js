window.addEventListener('load', () =>{
    // Manera de crear la fecha
    var fecha = new Date();
    var year =  fecha.getFullYear();
    // Los meses empiezan a contarlos desde el 0 , osea 0 sería enero
    var mes = fecha.getMonth();
    var dia = fecha.getDay();
    var hora = fecha.getHours();

    var textoHora = `
        El año es: ${year}
        El mes es: ${mes}
    `;
});