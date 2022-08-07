var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i =0; i<pacientes.length;i++){
    var paciente =pacientes[i];
    var peso=paciente.querySelector(".info-peso").textContent;
    var altura=paciente.querySelector(".info-altura").textContent;

    var imcCalculado= calcularImc(peso,altura);

    var imcTr=paciente.querySelector(".info-imc");
     imcTr.textContent =imcCalculado.toFixed(2);

}

function calcularImc(peso,altura){
    var resultado= peso/(altura*altura);
    return resultado;
    
}


