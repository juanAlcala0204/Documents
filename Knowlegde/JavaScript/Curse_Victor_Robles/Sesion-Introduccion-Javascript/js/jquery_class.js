/* 
    El $ en Jquery significa como referente a JQuery
    $(document) es semejante a window.addEventListenner('load', ()=>{}); significa que
    el código dentro de esta función se ejecutará únicamente cuando el código DOM este
    listo.
*/
$(document).ready( () =>{
    
    // Selecto de ID, así seleccionas el elemento del DOM
    $('#ID');
    //Selector Clase del DOM
    $('.clase');
    //Selector Etiqueta del DOM
    $('p');
    //Selector Atributo de alguna etiqueta del DOM
    /* En el DOM debe haber alguno elmento que tenga el atributo title="Google" */
    $('[title="Google"]')

    //Seleccionar algo que no sabemos donde están
    var busqueda = $('#caja').find('.resaltado');
    // El .parent saldrá al inicio del html
    // AVERIGUAR del parent 


    // Evento click
    $(".clase").click(()=>{
        /* 
            IMPORTANTE THIS SE USA PARA REFERIRSE AL PADRE DE QUIEN LO INVOCA Y/O USA
            OSEA EN ESTE CASO EL THIS SE REFIERE AL ID QUE EJECUTA LA FUNCION CLICK
        */
       /* la función addClass() añade una clase al elemento 
          removeClass() remueve una clase
          la funcion hasClass() se usa para saber si el elemnto tiene una clase*/

          // CONSEJO: para optimizar el codigo en el caso que se vaya a usar mas this en el
            // mismo lugar, es mas óptimo ponerlo en una variable para no acceder mas al DOM
        var that = $(this);
        that.addClass('zebra');
        that.removeClass('zebra');
        that.hasClass();
    });
    var datosChangeCss = new Array();

    datosChangeCss = [
        {id: 'rojo', propiedad: 'background', valorPropiedad: 'blue',},
        {id: 'amarillo', propiedad: 'background', valorPropiedad: 'yellow'},
        {id: 'negro', propiedad: 'background', valorPropiedad: 'black'},
        {id: 'negro', propiedad: 'color', valorPropiedad: 'white'}
    ];

    cambiarPropiedadesCss(datosChangeCss);

});

/* FUNCTION FOR BACKGROUND COLOR - DIVS */
/* 
    Params:
    datosChangeCss => This is neccesary that the dates only be type JSON, with the next information
                       {id: "", propiedad: "", valorPropiedad: ""}
                       id => ID of the element in the DOM
                       propiedad => Property Css that wanna apply in the element
                       valorPropiedad: Value of the Property
*/
function cambiarPropiedadesCss(datosChangeCss = ""){
    try{
        /* Validator null JSON */
        if(datosChangeCss == "" || datosChangeCss == undefined) return alert("No llego ningún elemento para cambiar");
        for(let indice in datosChangeCss){
            /* 
                Con el metodo css aplicará propiedades css al elemento del DOM
                primer parámetro propiedad segundo valor, si se desea seguir metiendo otros
                meotodos, se pueden seguir poniendo sin porblema
            */
            /* Validator null some date of the JSON */
            if(datosChangeCss[indice].id == "" ||
               datosChangeCss[indice].propiedad == "" ||
               datosChangeCss[indice].valorPropiedad == "") return alert("Un elemento llego con el valor vacío");

            $(`#${datosChangeCss[indice].id}`).css(`${datosChangeCss[indice].propiedad}`,`${datosChangeCss[indice].valorPropiedad}`);    
        }
    }catch(error){ 
        alert("Error al cambiar el fondo de color.");
        console.log(error);
    }
}