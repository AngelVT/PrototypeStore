var initialvalue = 100;
var price = document.getElementById("price");
var x;
var pricepercent = 1000;

function countadd(){
    initialvalue += 100;
    document.getElementById("counter").innerHTML = initialvalue;

    x = (initialvalue/100) * pricepercent;

    price.innerHTML = "<b>Precio: </b> $" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".00";
    document.getElementById("counter").innerHTML = initialvalue;
}

function countsubs(){
    initialvalue -= 100;
    if(initialvalue < 100){
        initialvalue = 100;
    }

    x = (initialvalue/100) * pricepercent;

    price.innerHTML = "<b>Precio: </b> $" + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ".00";
    document.getElementById("counter").innerHTML = initialvalue;
}