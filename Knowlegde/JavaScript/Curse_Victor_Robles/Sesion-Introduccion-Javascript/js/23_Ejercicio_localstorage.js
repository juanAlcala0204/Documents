'use strict'

window.addEventListener('load', ()=>{

    var formulario = document.querySelector("#frm_peliculas");

    formulario.addEventListener('submit', ()=>{

        var titulo = document.querySelector("#inp_pelicula").value;
        if(titulo.length >= 1){
            localStorage.setItem(titulo, titulo);
        }
        
    });

    var ul = document.querySelector("#peliculas");
    for(var i in localStorage){
        if(typeof localStorage[i] == 'string'){
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
        }
    }

});