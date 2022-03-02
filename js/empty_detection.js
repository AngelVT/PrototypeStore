var elem = document.getElementById("cont");
var buttons = document.getElementById("buy");
var detector;

function nothingHere(){
    detector = elem.childNodes.length;
    if(detector <= 7){  
        elem.innerHTML = '<p id="notify">No hay nada aquí</p>';
        buttons.style.display = "none"
    }
}