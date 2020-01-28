window.addEventListener('load',() =>{
    /* 
        Si se conoce que el código puede fallar se puede capturar el error
        con un tryCatch de esta forma puedo capturar el error y saber que hacer en el caso
        que este falle
    */
    try{
        var year = 2016;
        alert(yea);

        // Para decodificar una URL se puede hacer así
        console.log(decodeURIComponent("www.gooogle.com"));
    }catch(error){
        alert("Ha ocurrido un error en el código" + error);
    }
});


