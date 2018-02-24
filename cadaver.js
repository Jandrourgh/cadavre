document.addEventListener("DOMContentLoaded", inicializacion);
function inicializacion(){
    var texto = document.getElementById("frase");
    var cadaver = "";
    var anterior = document.getElementById("anterior");
    texto.addEventListener("keydown", function(event) {
        if(event.key === "Enter") {
            event.preventDefault();
            var palabras = texto.value.split(' ');
            if(palabras.length == 5){
                anterior.innerText = " ";
                var ultima = document.createTextNode(palabras[4]);
                anterior.appendChild(ultima);
                cadaver += texto.value + '\n';
                texto.value = "";
            }
        }
    });
    var botonFinalizar = document.getElementById("acabar");
    acabar.addEventListener("click", function(){
        alert(cadaver);
    });
}