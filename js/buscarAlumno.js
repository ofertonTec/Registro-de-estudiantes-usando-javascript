var input = document.querySelector("#buscarAlumno");

input.addEventListener("input", function () {

    var alumnos = document.querySelectorAll(".paciente");

    for (var i = 0; i < alumnos.length; i++) {
        var filtro = input.value;
        var noExiste = document.querySelector("#mensajeBusqueda");
        noExiste.innerHTML = "";
        if (filtro.length > 0) {
            var alumno = alumnos[i];
            var nombreTd = alumno.querySelector(".info-nombre");
            var nombre = nombreTd.textContent;
            var expresion = new RegExp(filtro, "i");


            if (!expresion.test(nombre)) {
                alumno.classList.add("invisible");
                console.log(alumnos);
                var pacienteInvisible = document.querySelectorAll(".paciente.invisible");
                if (pacienteInvisible.length == alumnos.length) {
                    noExiste.classList.add("mensaje-busqueda");
                    noExiste.textContent = "No existe información con el criterio de busqueda";
                }

            } else {
                alumno.classList.remove("invisible");
            }
        } else {
            for (var i = 0; i < alumnos.length; i++) {
                var alumno = alumnos[i];
                alumno.classList.remove("invisible");
            }
        }


    }
});