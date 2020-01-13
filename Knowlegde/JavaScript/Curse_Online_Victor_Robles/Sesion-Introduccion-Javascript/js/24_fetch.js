'use strict'

/*

    EXPLICACIÓN DE LO QUE ENCONTRARÁS ABAJO DESDE EL LLAMADO FETCH:

    Se creó unas funciones llamadas por ejemplo getUsuarios() dentro de estas hay un
    fetch(url) recordar que fetch es la similitud o un igual a un ajax, en lo siguiente
    podrás encontrar que después que ejecute esa función que tinee el fetch dentro, se usa unos
    .then() osea se hace uso de unas promesas. Esto se debe a que el fetch devuelve o se puede dar uso a las promesas
    primero se debe formatear siempre la respuesta del fetch a un JSON, esto se hace con el metodo data.json donde data
    es la respuesta o lo que llego del fetch, y se conveirte a un json, después users que viene siendo lo mismo que data pero ya convertido en un
    json, se realiza una función de callback y se ejectura otra instruccion etc, LO IMPORTANTE! es saber que el uso de las promesas
    nos permite realizar varias peticiones fetch esperando una respuesta del anterior, osea esto se debe usar siempre y cuando se necesite
    por ejemplo hacer algunas peticiones ajax primero y después otras

    RECORDAR: Todas estas peticiones son asincronas

    Esto se hace con javascript nativo....

*/

window.addEventListener('load', ()=>{

    // Fetch y Peticiones a servicios / apis rest
    // Fetch es un sustito del ajax con peticiones asincronas
    var div_usuarios = document.querySelector("#usuarios");
    var div_usuario_especifico = document.querySelector("#usuario_especifico");

    // El metodo Fetch recibe una url y es una promesa
    // La URL ( En este caso regres ) que se inserta contiene una simulacion de una respuesta de un backend, devuelve ene ste caso un json con datos
    getUsuarios()
        // El metodo .json (formatea) vuelve cualquier cosa a un json usable
        .then(data => data.json())
        .then(users =>{
            listadoUsuarios(users.data);

            return getUsuarioEspecifico();
        })
        /* Cuando se ejecuta una promesa usas .then que es como lo siguienete que debe hacer con la respuesta
        que retorno la promesa */
        .then(data => data.json())
        .then(usuario_especifico =>{
            mostrarUsuarioEspecifico(usuario_especifico.data);

            return getInfo()
        })
        .then(data => {
            console.log(data);
        })
        // De esta manera se capturan los errores de las promesas
        .catch(() =>{
            console.log(error);
        });

    function getUsuarios(){
        return fetch('https://reqres.in/api/users');
    }
    
    function getUsuarioEspecifico(){
        return fetch('https://reqres.in/api/users/2');
    }

    function listadoUsuarios(usuarios){
        usuarios.map( (user, i)=> {
            let nombre = document.createElement("h3");

            nombre.innerHTML = i + "." + user.first_name + " " +  user.last_name;
            div_usuarios.appendChild(nombre);
            document.querySelector(".loading").style.display = "none";
        });
    }

    function mostrarUsuarioEspecifico(user){
            let nombre = document.createElement("h4");

            nombre.innerHTML = user.first_name + " " +  user.last_name;
            div_usuario_especifico.appendChild(nombre);
            document.querySelector("#usuario_especifico .loading").style.display = "none";
    }

    function getInfo(){
        var profesor = {
            nombre:"Coso",
            apellidos: "Cososos",
            url: "www.google.com"
        }
            /* 
                Se crea una promesa de esa forma, con el new se instancia un objeto 
            */
        return new Promise((resolve, reject) =>{
            var profesor_str = JSON.stringify(profesor);

            if(typeof profesor_str != 'string') return reject('error');

            return resolve(profesor_str);
        });
        
    }

});