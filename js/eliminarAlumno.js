var tabla= document.querySelector(".pacientes");
tabla.addEventListener("click", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout( function(){
        event.target.parentNode.remove();
    },500);
        
    });
