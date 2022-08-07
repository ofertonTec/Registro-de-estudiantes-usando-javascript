var botonBuscar=document.querySelector("#buscar__paciente");
botonBuscar.addEventListener("click" , function(){
 /*Haciendo la requisición AJAX*/

 var xhr = new XMLHttpRequest;
 xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");

 xhr.addEventListener("load", function(){
     var respuesta = xhr.responseText;
     
     /*Convertimos el string en obejto */
     var alumnos = JSON.parse(respuesta);
     alumnos.forEach(function(alumno) {
        adicionarNuevoAlumnoTabla(alumno);
        console.log(alumno);
     });

 });
 xhr.send()

 /*https://alura-es-cursos.github.io/api-pacientes/pacientes.json */

 

});