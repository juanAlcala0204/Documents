'use strict'

window.addEventListener('load', () =>{

    var form = document.querySelector("#frm_form_dates");
    // Se selecciona el box con clase dashed, y se oculta con el style.display = "none";
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    form.addEventListener('submit', ()=>{ 

        var name = document.querySelector("#inp_name").value;
        var surname = document.querySelector("#inp_surname").value;
        var age = parseInt(document.querySelector("#inp_age").value);

        // Validaciones Datos - Vacíos
        var validatorName = validatorNull(name, "nombre", "name");

        var validatorSurname = validatorNull(surname, "apellido", "surname");

        var validatorNumber = validatorNull(age, "edad", "age", (param)=>{
            if( isNaN(param) ){
                return false;
            }
            return true;
        });

        if( !validatorName  || !validatorSurname || !validatorNumber ){
            return false;
        }else{
            box_dashed.style.display = "block"; 
            
            var datos_usuario = [name, surname, age];

            for(let indice in datos_usuario){
                // De esta manera creo un elemento y lo meto en una variable parrafo después le voy añadiendo otros elementos
                var parrafo = document.createElement("p");
                parrafo.append(datos_usuario[indice]);
                // Se agrega a box_dashed
                box_dashed.append(parrafo);
            }
        }

    });

    function validatorNull(param, text, campo, function_number = ""){
        if( isNaN(param) ){
            var param = param.toString();
            if(param.trim() == null || param.trim().length == 0 || param == 'NaN'){
                señalarError(text,false,campo);
                alert(`El ${text} no es valido`);
                return false;
            }
        }else{
            if(param == null || param.length == 0){
                señalarError(text,false,campo);
                alert(`El ${text} no es valido`);
                return false;
            }
            if(function_number != ""){
                var temp = function_number(param);
                if(!temp){
                    señalarError(text,false,campo);
                    alert(`La ${text} no es valido`);
                    return false;
                }
            }
        }
        señalarError(text,true,campo);
        return true;
    }

    function señalarError(text,estado,campo){
        if(estado){
            document.querySelector(`#fail_${campo}`).style.display = "none";
        }else{
            console.log("Entra");
            document.querySelector(`#fail_${campo}`).innerHTML = `El ${text} no es valido`;
        }
    }

});