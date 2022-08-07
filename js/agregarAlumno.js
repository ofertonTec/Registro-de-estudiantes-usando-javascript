
var btnAgregar = document.querySelector("#btnAgregar");
var tabla = document.querySelector(".pacientes");
btnAgregar.addEventListener("click", function () {
    var form = document.querySelector(".form");
    var alumno = crearAlumno(form);

    var errores = validarAlumno(alumno);
    if (errores.length> 0) {
        exibirMensajeError(errores);
        return;
    }else{
        adicionarNuevoAlumnoTabla(alumno);
        form.reset();
        var errores = document.querySelector(".mensajeError");
        errores.innerHTML="";
    }
    

});

function  adicionarNuevoAlumnoTabla(alumno){
    var alumnoTr = crearTr(alumno);
    tabla.appendChild(alumnoTr);
}
function crearAlumno(form) {
    var alumno = {
        nombre: form.nombre.value,
        apellido: form.apellido.value,
        dni: form.dni.value,
        peso: form.peso.value,
        altura: form.altura.value,
        imc: calcularImc(form.peso.value, form.altura.value).toFixed(2)
    };
    return alumno;

}
function crearTd(dato, clase) {
    // joel, td, info-nombre
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;
    return td;

}
function crearTr(alumno) {
    var alumnoTr = document.createElement("tr");
    alumnoTr.classList.add("paciente");

    //Construimos la etiqueda td y le asignamos su respectiva clase
    var nombreTd = crearTd(alumno.nombre, "info-nombre");
    var apellidoTd = crearTd(alumno.apellido, "info-apellido");
    var dniTd = crearTd(alumno.dni, "info-dni");
    var pesoTd = crearTd(alumno.peso, "info-peso");
    var alturaTd = crearTd(alumno.altura, "info-altura");
    var imcTd = crearTd(alumno.imc, "info-imc");

    //asignamos cada etiqueta creada a la etiqueta padre que es el tr
    alumnoTr.appendChild(nombreTd);
    alumnoTr.appendChild(apellidoTd);
    alumnoTr.appendChild(dniTd);
    alumnoTr.appendChild(pesoTd);
    alumnoTr.appendChild(alturaTd);
    alumnoTr.appendChild(imcTd);
    return alumnoTr;
}


function validarAlumno(alumno) {
    var errores = [];
    if (alumno.nombre.length == 0) {
        errores.push("El campo nombre no debe estar vacio");
    }
    if (alumno.apellido.length == 0) {
        errores.push("El campo apellido no debe estar vacio");
    }
    if (alumno.dni.length == 0) {
        errores.push("El campo dni no debe estar vacio");
    }
    if (alumno.peso.length == 0) {
        errores.push("El campo peso no debe estar vacio");
    } else {
        if (!validarPeso(alumno)) {
            errores.push("Peso Incorrecto");
        }
    }
    if (alumno.altura.length == 0) {
        errores.push("El campo altura no debe estar vacio");
    } else {
        if (!validarAltura(alumno)) {
            errores.push("Altura Incorrecto");
        }
    }



    return errores;
}
function validarPeso(alumno) {
    if (alumno.peso > 0 && alumno.peso < 100) {
        return true;
    } else {
        return false;
    }

}

function validarAltura(alumno) {
    if (alumno.altura > 0 && alumno.altura < 4) {
        return true;
    } else {
        return false;
    }
}

function exibirMensajeError(errores){
    var ul = document.querySelector(".mensajeError");
        ul.innerHTML="";
        errores.forEach(error => {
            var li = document.createElement("li");
            li.classList.add("mensajeError");
            li.textContent = error;
            ul.appendChild(li);
        });
}


